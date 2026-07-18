import { sql, ensureSchema } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return Response.json({ error: "Webhook not configured." }, { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return Response.json({ error: "Invalid signature." }, { status: 400 });
  }

  await ensureSchema();
  const query = sql();

  if (event.type === "payment_intent.succeeded" || event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    const status = event.type === "payment_intent.succeeded" ? "paid" : "failed";

    await query`
      UPDATE orders
      SET status = ${status}, updated_at = now()
      WHERE stripe_payment_intent_id = ${paymentIntent.id};
    `;
  }

  return Response.json({ received: true });
}
