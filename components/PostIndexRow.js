import Link from "next/link";
import Image from "next/image";

export default function PostIndexRow({ post, headingLevel = "h3", className = "" }) {
  const Heading = headingLevel;
  return (
    <Link className={`index-row reveal ${className}`} href={`/blog/${post.slug}`}>
      <div>
        <p className="index-meta">{post.label}</p>
        <Heading>{post.title}</Heading>
        <p>{post.excerpt}</p>
      </div>
      {post.thumb && (
        <span className="index-thumb">
          <Image src={post.thumb} alt="" width={168} height={120} />
        </span>
      )}
      <span className="index-arrow">↗</span>
    </Link>
  );
}
