import { getAllPostsMeta } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://ruchikaahire.github.io";
  const posts = getAllPostsMeta();

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/blog/`, lastModified: new Date() },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}/`,
      lastModified: new Date(),
    })),
  ];
}
