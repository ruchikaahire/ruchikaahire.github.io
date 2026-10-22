import { getAllPostsMeta } from "@/lib/posts";
import PostIndexRow from "@/components/PostIndexRow";

export default function NotesSection() {
  const posts = getAllPostsMeta();
  return (
    <section className="section shell">
      <header className="section-head reveal">
        <h2>Notes from the field and the desk.</h2>
      </header>
      <div className="glass reveal">
        {posts.map((post) => (
          <PostIndexRow key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
