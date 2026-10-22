import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-head shell reveal">
        <p className="label">404</p>
        <h1>This page wandered off.</h1>
        <p>
          The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.{" "}
          <Link href="/" className="text-link">
            Back to the homepage ↗
          </Link>
        </p>
      </section>
    </main>
  );
}
