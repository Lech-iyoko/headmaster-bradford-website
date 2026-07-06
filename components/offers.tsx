import { Reveal } from "@/components/reveal"

const OFFERS = [
  { tag: "New Clients", title: "15% off your first visit", desc: "A little welcome from us — mention this offer when you book." },
  { tag: "Midweek", title: "Wash, cut & blow-dry £30", desc: "Tuesday to Thursday appointments only." },
  { tag: "Bundle", title: "Braids + treatment, save £10", desc: "Book any braid style with a hair treatment together." },
]

export function Offers() {
  return (
    <section className="pg-section offer-band">
      <Reveal>
        <div className="pg-head" style={{ marginBottom: 48 }}>
          <p className="pg-eyebrow">What we&apos;re offering</p>
          <h2 className="pg-h2">Latest offers</h2>
        </div>
      </Reveal>
      <div className="offers-grid">
        {OFFERS.map((o, i) => (
          <Reveal key={i} delay={i * 0.1} className="offer-band-card">
            <span className="offer-tag">{o.tag}</span>
            <h3>{o.title}</h3>
            <p>{o.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
