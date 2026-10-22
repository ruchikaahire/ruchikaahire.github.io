export default function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <video autoPlay muted loop playsInline poster="/assets/hero-poster.jpg">
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
