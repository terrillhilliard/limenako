import { sql, ensureSchema } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RequestedItem = { productId: unknown; quantity: unknown };

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const requestedItems: RequestedItem[] = Array.isArray(body?.items) ? body.items : [];

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }

  const lineItems = requestedItems
    .map((item) => {
      const productId = typeof item.productId === "string" ? item.productId : "";
      const quantity =
        typeof item.quantity === "number" && Number.isInteger(item.quantity)
          ? item.quantity
          : 0;
      const product = getProduct(productId);
      if (!product || quantity <= 0) return null;
      return { product, quantity };
    })
    .filter((line): line is { product: NonNullable<ReturnType<typeof getProduct>>; quantity: number } => line !== null);

  if (lineItems.length === 0) {
    return Response.json({ error: "Cart is empty." }, { status: 400 });
  }

  const amountCents = lineItems.reduce(
    (sum, line) => sum + line.product.priceCents * line.quantity,
    0
  );

  await ensureSchema();
  const query = sql();

  const paymentIntent = await stripe().paymentIntents.create({
    amount: amountCents,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
    receipt_email: email,
  });

  const [order] = await query`
    INSERT INTO orders (stripe_payment_intent_id, email, amount_cents, status)
    VALUES (${paymentIntent.id}, ${email}, ${amountCents}, 'pending')
    RETURNING id;
  `;

  for (const line of lineItems) {
    await query`
      INSERT INTO order_items (order_id, product_id, quantity, unit_price_cents)
      VALUES (${order.id}, ${line.product.id}, ${line.quantity}, ${line.product.priceCents});
    `;
  }

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
