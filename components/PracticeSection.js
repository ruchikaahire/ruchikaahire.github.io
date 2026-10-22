import Link from "next/link";

const timeline = [
  {
    range: "2025-2026",
    title: "MSc Environmental Politics & Development",
    org: "SOAS University of London",
    detail: "Dissertation: energy security, climate transition and social equity in India's 2026 energy shock.",
  },
  {
    range: "2023-2025",
    title: "Senior Communications Coordinator",
    org: "Centre for Social and Behaviour Change Communication",
    detail: "Authored 50+ human-interest stories across 12 districts in Maharashtra and designed a stakeholder toolkit for child marriage prevention.",
  },
  {
    range: "2023",
    title: "Media Fellow",
    org: "Agastya International Foundation",
    detail: "Produced written content for grassroots education initiatives; storytelling campaigns lifted digital engagement by around 5%.",
  },
  {
    range: "2021-2023",
    title: "MA Media and Communications",
    org: "SNDT Women's University",
    detail: "Dissertation film KASHT won Best Student Film at the Parambhi International Award.",
  },
  {
    range: "2021-2022",
    title: "Writer and communications practitioner",
    org: "The Liberal Indic, Beyond Marketing India",
    detail: "Wrote and edited blogs, press releases and campaign content; supported audience growth through research-driven content.",
  },
];

export default function PracticeSection() {
  return (
    <section className="section shell" id="about">
      <div className="about-inner glass reveal">
        <div className="about-copy">
          <h2>Words, evidence and a camera, used with care.</h2>
          <p>
            My work sits where communications meets public purpose. Across three years in
            development communications, I&rsquo;ve shaped advocacy material, documented
            programmes and written 50+ human-interest stories grounded in SBCC and
            gender-transformative messaging.
          </p>
          <Link className="button button-ghost" href="/blog">
            Read the notes <span>↗</span>
          </Link>
        </div>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.title} tabIndex={0}>
              <span className="timeline-dot" aria-hidden="true"></span>
              <time>{item.range}</time>
              <h3>{item.title}</h3>
              <span className="timeline-org">{item.org}</span>
              <p className="timeline-detail">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
