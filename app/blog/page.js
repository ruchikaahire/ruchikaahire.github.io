import { getAllPostsMeta } from "@/lib/posts";
import PostIndexRow from "@/components/PostIndexRow";

export const metadata = {
  title: "Blog",
  description: "Notes by Ruchika Ahire on climate, development, communication and field research.",
  openGraph: {
    title: "Blog - Ruchika Ahire",
    description:
      "Notes by Ruchika Ahire on climate, development, communication and field research.",
    url: "https://ruchikaahire.github.io/blog/",
    images: ["/assets/ruchika-ahire.jpg"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();
  return (
    <main id="main">
      <section className="page-head shell reveal">
        <h1>Ideas in progress. Questions worth staying with.</h1>
        <p>
          Essays and working notes on climate, development, labour, communication and the
          politics hidden inside everyday systems.
        </p>
      </section>
      <section className="shell" aria-label="Articles">
        <div className="glass reveal">
          {posts.map((post) => (
            <PostIndexRow key={post.slug} post={post} headingLevel="h2" />
          ))}
        </div>
        <div className="blog-signoff glass reveal">
          <p>More notes are taking shape.</p>
          <a href="mailto:ruchikaahire@gmail.com">Suggest a conversation ↗</a>
        </div>
      </section>
    </main>
  );
}
