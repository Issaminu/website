import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

export const prerender = true;

const blogs = await getCollection("blog");

const pages = Object.fromEntries(
  blogs.map(({ id, slug, data }) => [id, { data, slug }])
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => {
    const date = new Date(data.date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return {
      title: data.title,
      description: "Issam Boubcher  ·  " + date,
      bgGradient: [
        [6, 38, 45],
        [8, 3, 2],
      ],
      logo: {
        path: "./src/assets/Issaminu Logo LIGHT small.png",
        size: [100, 108],
      },
      fonts: [
        "./public/fonts/Rabenau-W01-SemiBold.ttf",
        "./public/fonts/Inter.ttf",
      ],
      bgImage: {
        path: `./src/assets/bg.png`,
      },
      font: {
        title: {
          families: ["Rabenau W01"],
        },
        description: {
          families: ["Inter"],
          weight: "SemiBold",
          size: 26,
          color: [138, 138, 138],
        },
      },
    };
  },
});
