import Link from "next/link";
import Image from "next/image";

export default function PostIndexRow({ post, headingLevel = "h3" }) {
  const Heading = headingLevel;
  return (
    <Link className="note-row" href={`/blog/${post.slug}`}>
      <div>
        <p className="note-meta">{post.label}</p>
        <Heading>{post.title}</Heading>
        <p>{post.excerpt}</p>
      </div>
      {post.thumb && (
        <span className="note-thumb">
          <Image src={post.thumb} alt="" width={168} height={120} />
        </span>
      )}
      <span className="note-arrow">↗</span>
    </Link>
  );
}
