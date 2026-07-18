import { sql, ensureSchema } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const fullName = typeof body?.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const company = typeof body?.company === "string" ? body.company.trim() : "";
  const region = typeof body?.region === "string" ? body.region.trim() : "";
  const channel = typeof body?.channel === "string" ? body.channel.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!fullName || !EMAIL_RE.test(email) || !region || !channel || !message) {
    return Response.json(
      { error: "Full name, a valid email, region, channel, and message are required." },
      { status: 400 }
    );
  }

  await ensureSchema();
  const query = sql();
  await query`
    INSERT INTO distributor_inquiries (full_name, email, company, region, channel, message)
    VALUES (${fullName}, ${email}, ${company || null}, ${region}, ${channel}, ${message});
  `;

  return Response.json({ ok: true });
}
