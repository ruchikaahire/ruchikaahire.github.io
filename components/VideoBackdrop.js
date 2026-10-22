import Image from "next/image";

export default function VideoBackdrop({ opacity = 0.34, static: isStatic = false }) {
  return (
    <div className="video-backdrop" aria-hidden="true">
      {isStatic ? (
        <Image
          src="/assets/hero-poster.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", opacity }}
        />
      ) : (
        <video autoPlay muted loop playsInline poster="/assets/hero-poster.jpg" style={{ opacity }}>
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
