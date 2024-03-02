import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypeExternalLinks, { target: "_blank" }],
      [
        rehypeToc,
        {
          headings: ["h1", "h2"],
          customizeTOC(toc) {
            return {
              type: "element",
              tagName: "details",
              properties: {
                class: "toc-wrapper",
              },
              children: [
                {
                  type: "element",
                  tagName: "summary",
                  properties: {
                    class: "toc-summary",
                  },
                  children: [{ type: "text", value: "Table of Contents" }],
                },
                toc,
              ],
            };
          },
        },
      ],
    ],
  },
  integrations: [tailwind(), react(), icon(), mdx()],
});
