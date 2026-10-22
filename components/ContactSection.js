import VideoBackdrop from "@/components/VideoBackdrop";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <VideoBackdrop opacity={0.26} static />
      <div className="shell reveal">
        <h2>Let&rsquo;s build something that matters.</h2>
        <a className="contact-email" href="mailto:ruchikaahire@gmail.com">
          ruchikaahire@gmail.com <span>↗</span>
        </a>
        <div className="contact-meta">
          <span>London, UK</span>
          <a href="https://linktr.ee/ruchikaahire" rel="me">
            Linktree ↗
          </a>
        </div>
      </div>
    </section>
  );
}
