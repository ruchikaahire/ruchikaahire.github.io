import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPostsMeta() {
  return getAllSlugs()
    .map((slug) => {
      const { data } = matter(
        fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8")
      );
      return { slug, ...data };
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getPostBySlug(slug) {
  const raw = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);

  const bodyHtml = (await remark().use(remarkHtml).process(content)).toString();
  const endNoteHtml = data.endNote
    ? (await remark().use(remarkHtml).process(data.endNote))
        .toString()
        .replace(/^<p>/, "")
        .replace(/<\/p>\n?$/, "")
    : "";

  return { slug, ...data, bodyHtml, endNoteHtml };
}
