import { sql, ensureSchema } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }

  await ensureSchema();
  const query = sql();
  await query`
    INSERT INTO newsletter_subscribers (email)
    VALUES (${email})
    ON CONFLICT (email) DO NOTHING;
  `;

  return Response.json({ ok: true });
}
