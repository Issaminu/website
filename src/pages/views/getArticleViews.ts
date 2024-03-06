import { kv } from "@vercel/kv";
import type { APIRoute } from "astro";

// No longer used, using /views/getAllViews instead
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const identifier = url.searchParams.get("identifier");

  if (!identifier) {
    return new Response(
      JSON.stringify({
        error: "No ID provided",
      }),
      {
        status: 400,
      }
    );
  }
  const views = await kv.get(identifier);
  return new Response(
    JSON.stringify({
      views: views || 0,
    })
  );
};

export const PATCH: APIRoute = async ({ request }) => {
  const body = await request.json();
  const identifier = body.identifier;

  if (!identifier) {
    return new Response(
      JSON.stringify({
        error: "No ID provided",
      }),
      {
        status: 400,
      }
    );
  }

  await kv.incr(identifier);
  const views = await kv.get(identifier);

  return new Response(
    JSON.stringify({
      views: views || 0,
    })
  );
};
