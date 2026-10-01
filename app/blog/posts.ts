import Parser from "rss-parser";
import sanitizeHtml from "sanitize-html";

const feedUrl = "https://sundarkp.substack.com/feed";
const parser = new Parser({ customFields: { item: ["content:encoded"] } });

export type BlogPost = {
  title: string;
  slug: string;
  link: string;
  publishedAt: string;
  summary: string;
  content: string;
};

// Slugs of posts that read as personal/creative writing (film, travel, poetry)
// rather than tech/professional posts — these are shown on the Creatives page instead of Blog.
const CREATIVE_SLUGS = new Set([
  "anandfilm-hrishikesh-mukherjee-ikiru",
  "2d4",
  "paradise-unexplored-shillong-cherapunjee-lush-green-and-rain",
  "21-01-11",
  "paradise-unexplored-guide-driver-and-the-fellow-wanderers",
  "paradise-unexplored-my-trip-to-the-north-east-first-day-n-kolkata",
  "the-white-tiger-it-is-more-of-a-black-and-white-picture",
  "interesting-ads-intent-and-their-impact",
]);

async function fetchAllPosts(): Promise<BlogPost[]> {
  const response = await fetch(feedUrl, {
    next: { revalidate: 3600 },
    headers: { "User-Agent": "SundaraKumarPortfolio/1.0" },
  });

  if (!response.ok) throw new Error(`Substack feed request failed (${response.status})`);

  const feed = await parser.parseString(await response.text());

  return feed.items.flatMap((item) => {
    if (!item.title || !item.link) return [];
    const slug = new URL(item.link).pathname.split("/").filter(Boolean).at(-1);
    if (!slug) return [];

    const rawContent = (item as typeof item & { "content:encoded"?: string })[
      "content:encoded"
    ] ?? item.content ?? "";

    return [{
      title: item.title,
      slug,
      link: item.link,
      publishedAt: item.pubDate ?? "",
      summary: item.contentSnippet ?? "",
      content: sanitizeHtml(rawContent, {
        allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "figure", "figcaption", "iframe"],
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          a: ["href", "name", "target", "rel"],
          img: ["src", "alt", "title", "width", "height", "loading"],
          iframe: ["src", "title", "width", "height", "loading", "allow", "allowfullscreen", "frameborder"],
        },
        allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com", "open.spotify.com"],
        allowedSchemes: ["http", "https", "mailto"],
        transformTags: {
          a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer", target: "_blank" }),
        },
      }),
    }];
  });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts.filter((post) => !CREATIVE_SLUGS.has(post.slug));
}

export async function getCreativePosts(): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts.filter((post) => CREATIVE_SLUGS.has(post.slug));
}

export function formatPostDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
