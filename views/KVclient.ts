import { createClient, type VercelKV } from "@vercel/kv";

const globalKV = global as unknown as { kv: VercelKV; kvReadOnly: VercelKV };

const kvReadOnly =
  globalKV.kvReadOnly ||
  createClient({
    url: import.meta.env.KV_REST_API_URL,
    token: import.meta.env.KV_REST_API_READ_ONLY_TOKEN,
  });

const kv =
  globalKV.kv ||
  createClient({
    url: import.meta.env.KV_REST_API_URL,
    token: import.meta.env.KV_REST_API_TOKEN,
  });

if (process.env.NODE_ENV !== "production") {
  globalKV.kvReadOnly = kvReadOnly;
  globalKV.kv = kv;
}

export { kvReadOnly, kv };
