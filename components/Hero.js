import Image from "next/image";
import PhotoFrame from "@/components/PhotoFrame";

export default function Hero() {
  return (
    <section className="hero-video">
      <video
        className="hero-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim" aria-hidden="true"></div>
      <div className="hero shell">
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
            <a className="button button-dark" href="#work">
              See the work <span>↓</span>
            </a>
            <a className="text-link" href="mailto:ruchikaahire@gmail.com">
              ruchikaahire@gmail.com ↗
            </a>
          </div>
        </div>
        <figure className="hero-figure reveal">
          <PhotoFrame>
            <div className="hero-photo hero-photo-cutout">
              <Image
                src="/assets/portrait-b.webp"
                alt="Portrait of Ruchika Ahire"
                width={900}
                height={1490}
                priority
              />
            </div>
            <figcaption className="frame-caption">Based in London. Open to new collaborations.</figcaption>
          </PhotoFrame>
          <div className="hero-stamp" aria-hidden="true">
            Evidence
            <br />
            with <span>care</span>
          </div>
        </figure>
      </div>
    </section>
  );
}
