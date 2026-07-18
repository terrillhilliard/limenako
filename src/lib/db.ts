import { neon } from "@neondatabase/serverless";

function connectionString(): string {
  const url =
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL ??
    process.env.DATABASE_URL_UNPOOLED;
  if (!url) {
    throw new Error(
      "No database connection string found. Set DATABASE_URL (or POSTGRES_URL)."
    );
  }
  return url;
}

export function sql() {
  return neon(connectionString());
}

let schemaReady: Promise<void> | null = null;

export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    const query = sql();
    schemaReady = (async () => {
      await query`
        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
          id SERIAL PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
      await query`
        CREATE TABLE IF NOT EXISTS distributor_inquiries (
          id SERIAL PRIMARY KEY,
          full_name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT,
          region TEXT NOT NULL,
          channel TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
      await query`
        CREATE TABLE IF NOT EXISTS orders (
          id SERIAL PRIMARY KEY,
          stripe_payment_intent_id TEXT NOT NULL UNIQUE,
          email TEXT NOT NULL,
          amount_cents INTEGER NOT NULL,
          status TEXT NOT NULL DEFAULT 'pending',
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
      await query`
        CREATE TABLE IF NOT EXISTS order_items (
          id SERIAL PRIMARY KEY,
          order_id INTEGER NOT NULL REFERENCES orders(id),
          product_id TEXT NOT NULL,
          quantity INTEGER NOT NULL,
          unit_price_cents INTEGER NOT NULL
        );
      `;
    })();
  }
  return schemaReady;
}
