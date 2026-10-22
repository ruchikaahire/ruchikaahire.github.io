import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-copy reveal">
        <p className="hero-eyebrow">Environmental politics &amp; development, SOAS</p>
        <h1>
          Complex questions, told as <em>stories that move.</em>
        </h1>
        <p className="hero-intro">
          Research, communications and documentary work connecting climate, labour and gender
          to the policies and lives they shape.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            See the work <span>↓</span>
          </a>
          <a className="text-link" href="mailto:ruchikaahire@gmail.com">
            ruchikaahire@gmail.com ↗
          </a>
        </div>
      </div>
      <figure className="hero-figure reveal">
        <Image
          src="/assets/portrait-b.webp"
          alt="Portrait of Ruchika Ahire"
          width={900}
          height={1490}
          priority
        />
      </figure>
    </section>
  );
}
