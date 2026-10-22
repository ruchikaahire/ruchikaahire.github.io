import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    kicker: "MSc dissertation, SOAS, 2026",
    title: "Energy security, climate transition and social equity",
    body: "A data-led investigation of how energy disruption travels unevenly through Indian households and livelihoods, combining government datasets, policy evidence and scenario modelling.",
    tags: ["Python", "Policy analysis", "Data visualisation"],
    image: "/assets/energy-research.png",
    alt: "Line chart showing household LPG consumption falling while petrol consumption rises",
    href: "/blog/energy-inequality",
    cue: "Read the research note",
  },
  {
    kicker: "Independent study, 2022",
    title: "Missing Wombs",
    body: "An evidence-based study of seasonal migration, reproductive health and workplace risk among women sugarcane cutters in Beed.",
    tags: ["Field research", "Gender & labour"],
    image: "/assets/missing-wombs.png",
    alt: "Cover artwork for a study on women sugarcane cutters in Beed",
    href: "/blog/missing-wombs",
    cue: "Read the field note",
    reverse: true,
  },
  {
    kicker: "Documentary, concept & director",
    title: "KASHT",
    body: "A documentary on migration, drought and labour in Beed. Best Student Film at the Parambhi International Award.",
    tags: ["Direction", "Visual storytelling"],
    image: "/assets/hero-poster.jpg",
    alt: "",
    cue: null,
  },
];

export default function WorkSection() {
  return (
    <section className="section shell" id="work">
      <header className="section-head reveal">
        <h2>Research with a point of view.</h2>
        <p>
          Projects that move between data, policy and lived experience, without losing the
          people inside the story.
        </p>
      </header>

      <div className="work-grid">
        {projects.map((p) => {
          const className = `project glass reveal ${p.reverse ? "project-reverse" : ""}`;
          const inner = (
            <>
              <div className="project-media">
                <Image src={p.image} alt={p.alt} width={1200} height={900} />
              </div>
              <div className="project-body">
                <p className="project-kicker">{p.kicker}</p>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul className="project-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {p.cue && (
                  <span className="project-cue">
                    {p.cue} <span>↗</span>
                  </span>
                )}
              </div>
            </>
          );

          return p.href ? (
            <Link key={p.title} className={className} href={p.href}>
              {inner}
            </Link>
          ) : (
            <article key={p.title} className={className}>
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}
