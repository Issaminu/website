import { kv } from "@vercel/kv";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ request }) => {
  const articles = await getCollection("blog");

  const articleViews = await Promise.all(
    articles.map(async (article) => {
      const views = (await kv.get(article.slug)) as string;
      return {
        identifier: article.slug,
        views: Number(views) || 0,
      };
    })
  );

  return new Response(JSON.stringify(articleViews));
};
