import { primaryNavigation, site } from "@/lib/site";

const industries = [
  ["Travel & Visa", "Instant itineraries, qualification and booking handover."],
  ["Healthcare", "Patient enquiries, appointments and human escalation."],
  ["Education", "Admissions qualification, follow-up and enrolment workflows."],
  ["E-commerce", "Product discovery, order capture and customer support."],
];

const capabilities = [
  "WhatsApp lead qualification",
  "Instagram enquiry capture",
  "CRM pipeline synchronisation",
  "Human handover with context",
  "Multilingual conversations",
  "Automated follow-up workflows",
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="/" aria-label="Aiingo home">Aiingo<span>.</span></a>
        <nav aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="button buttonSmall" href="https://wa.me/971581301595">Talk to our team</a>
      </header>

      <main>
        <section className="hero">
          <div className="eyebrow">UAE · INDIA · MENA · GLOBAL</div>
          <h1>Stop losing leads.<br /><span>Deploy Leadvyne.</span></h1>
          <p>
            AI automation infrastructure for high-volume service businesses.
            Qualify, route and follow up with every enquiry across WhatsApp and your CRM.
          </p>
          <div className="actions">
            <a className="button" href="https://wa.me/971581301595">Start a conversation</a>
            <a className="button buttonGhost" href="#leadvyne">Explore the platform</a>
          </div>
          <div className="proof" aria-label="Platform outcomes">
            <div><strong>&lt;60s</strong><span>Lead response</span></div>
            <div><strong>24/7</strong><span>Automated triage</span></div>
            <div><strong>Multi</strong><span>English · Arabic · Malayalam</span></div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="sectionIntro">
            <span>Industry intelligence</span>
            <h2>Built for businesses where every enquiry matters.</h2>
          </div>
          <div className="grid">
            {industries.map(([title, copy]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section platform" id="leadvyne">
          <div>
            <span className="kicker">The Leadvyne platform</span>
            <h2>One operating layer for conversations and pipeline.</h2>
            <p>
              Leadvyne connects customer conversations with the people, data and actions
              required to move opportunities forward.
            </p>
          </div>
          <ul>
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </section>

        <section className="section results" id="results">
          <span className="kicker">Real operations</span>
          <h2>From first message to qualified opportunity.</h2>
          <div className="flow">
            <span>Meta Ad</span><b>→</b><span>WhatsApp</span><b>→</b>
            <span>AI qualification</span><b>→</b><span>CRM + human team</span>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="sectionIntro">
            <span>Go live without the drag</span>
            <h2>A clear path from enquiry chaos to a working system.</h2>
          </div>
          <ol>
            <li><strong>Connect</strong><span>Bring in WhatsApp, forms and your CRM.</span></li>
            <li><strong>Define</strong><span>Set qualification, routing and escalation rules.</span></li>
            <li><strong>Launch</strong><span>Test with real scenarios before going live.</span></li>
            <li><strong>Improve</strong><span>Use conversation data to increase conversion.</span></li>
          </ol>
        </section>

        <section className="cta">
          <p>Your next client is one chat away.</p>
          <h2>Let every enquiry reach the right next step.</h2>
          <a className="button buttonLight" href="https://wa.me/971581301595">
            Chat with Aiingo
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="/">{site.shortName}<span>.</span></a>
        <p>{site.description}</p>
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </footer>
    </>
  );
}
