import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};

  return {
    title: post.title,
    description: post.dek,
    openGraph: {
      type: "article",
      title: `${post.title} - Ruchika Ahire`,
      description: post.dek,
      url: `https://ruchikaahire.github.io/blog/${post.slug}/`,
      images: [post.image || "/assets/portrait-b-og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Ruchika Ahire`,
      description: post.dek,
      images: [post.image || "/assets/portrait-b-og.jpg"],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) notFound();

  return (
    <main id="main">
      <article className={`article ${!post.image ? "article-text" : ""}`}>
        <header className="article-header reveal">
          <p className="label">{post.label}</p>
          <h1>{post.title}</h1>
          <p className="dek">{post.dek}</p>
        </header>

        {post.image && (
          <figure className={`article-image reveal ${post.imageVariant === "poster" ? "article-poster" : ""}`}>
            <Image
              src={post.image}
              alt={post.imageAlt || ""}
              width={post.imageWidth || 1600}
              height={post.imageHeight || 900}
            />
            {post.imageCaption && <figcaption>{post.imageCaption}</figcaption>}
          </figure>
        )}

        <div className="article-body reveal">
          <p className="lead">{post.lead}</p>
          <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
          {post.endNoteHtml && (
            <p
              className="article-end"
              dangerouslySetInnerHTML={{ __html: post.endNoteHtml }}
            />
          )}
        </div>
      </article>

      <nav className="next-note">
        {post.nextSlug ? (
          <>
            <span>Next note</span>
            <Link href={`/blog/${post.nextSlug}`}>{post.nextTitle} →</Link>
          </>
        ) : (
          <>
            <span>Return</span>
            <Link href="/blog">All field notes →</Link>
          </>
        )}
      </nav>
    </main>
  );
}
