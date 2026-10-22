import Image from "next/image";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section className="work shell" id="work">
      <header className="section-head reveal">
        <h2>Research with a point of view.</h2>
        <p>
          Projects that move between data, policy and lived experience, without losing the
          people inside the story.
        </p>
      </header>

      <article className="case case-featured reveal">
        <div>
          <Link
            className="case-media"
            href="/blog/energy-inequality"
            aria-label="Read about the energy security research"
          >
            <Image
              src="/assets/energy-research.png"
              alt="Line chart showing household LPG consumption falling while petrol consumption rises"
              width={1600}
              height={900}
            />
          </Link>
          <p className="case-caption">MSc dissertation, SOAS, 2026</p>
        </div>
        <div className="case-copy">
          <h3>Energy security, climate transition and social equity</h3>
          <p>
            A data-led investigation of how energy disruption travels unevenly through Indian
            households and livelihoods, combining government datasets, policy evidence and
            scenario modelling.
          </p>
          <ul className="case-tags" aria-label="Methods">
            <li>Python</li>
            <li>Policy analysis</li>
            <li>Data visualisation</li>
          </ul>
          <Link className="case-link" href="/blog/energy-inequality">
            Read the research note <span>↗</span>
          </Link>
        </div>
      </article>

      <div className="case-grid">
        <article className="case case-photo reveal">
          <Link
            className="case-media"
            href="/blog/missing-wombs"
            aria-label="Read the Missing Wombs field note"
          >
            <Image
              src="/assets/missing-wombs.png"
              alt="Cover artwork for a study on women sugarcane cutters in Beed"
              width={1131}
              height={1600}
            />
          </Link>
          <p className="case-caption">Independent study, 2022</p>
          <div className="case-copy">
            <h3>Missing Wombs</h3>
            <p>
              An evidence-based study of seasonal migration, reproductive health and workplace
              risk among women sugarcane cutters in Beed.
            </p>
            <Link className="case-link" href="/blog/missing-wombs">
              Read the field note <span>↗</span>
            </Link>
          </div>
        </article>

        <article className="case case-film reveal">
          <div className="film-panel">
            <div className="play-mark" aria-hidden="true">
              ▶
            </div>
            <strong>KASHT</strong>
            <span>
              A documentary on migration, drought and labour in Beed. Best Student Film, Parambhi
              International Award.
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
