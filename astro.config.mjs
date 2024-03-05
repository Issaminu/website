import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import silverGradientTheme from "./src/lib/silver-gradient-theme.json";
import astroOGImage from "astro-og-image";

const rehypePrettyCodeOptions = {
  theme: silverGradientTheme,
  wrap: true,
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
};

export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypeExternalLinks, { target: "_blank" }],
    ],
  },
  integrations: [
    tailwind(),
    react(),
    icon(),
    mdx(),
    astroOGImage({
      config: {
        path: "/content/blog",
      },
    }),
  ],
});
