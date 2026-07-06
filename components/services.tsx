import { PHONE_HREF, WA_LINK, PhoneIcon, WhatsAppIcon } from "@/components/salon-ui"
import { Reveal } from "@/components/reveal"

const PRICES_L = [
  { n: "Wash, Cut & Blow-Dry", p: "from £35" },
  { n: "Occasion Hairstyling", p: "from £40" },
  { n: "Box Braids", p: "from £60" },
  { n: "Knotless Braids", p: "from £70" },
  { n: "Cornrows", p: "from £30" },
]
const PRICES_R = [
  { n: "Crochet Extensions", p: "from £55" },
  { n: "Weaving Extensions (full head)", p: "from £80" },
  { n: "Deep Conditioning Treatment", p: "from £25" },
  { n: "Protein / Repair Treatment", p: "from £35" },
  { n: "Kids' Braids & Styles", p: "from £25" },
]

function PriceCol({ rows }: { rows: { n: string; p: string }[] }) {
  return (
    <div>
      {rows.map((r, i) => (
        <div key={i} className="price-row">
          <span className="price-name">{r.n}</span>
          <span className="price-dots" />
          <span className="price-val">{r.p}</span>
        </div>
      ))}
    </div>
  )
}

export function Services() {
  return (
    <section className="pg-section" id="services">
      <Reveal>
        <div className="pg-head" style={{ alignItems: "center", textAlign: "center" }}>
          <p className="pg-eyebrow">Popular services</p>
          <h2 className="pg-h2">Our price list</h2>
          <p className="pg-body" style={{ maxWidth: 560 }}>
            Hairstyling · Braids · Crochet Extensions · Weaving Extensions · Hair Treatments
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="services-grid">
        <PriceCol rows={PRICES_L} />
        <PriceCol rows={PRICES_R} />
      </Reveal>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 48, flexWrap: "wrap" }}>
        <a className="pg-btn pg-btn-gold" href={PHONE_HREF}>
          <PhoneIcon />
          Call to book
        </a>
        <a className="pg-btn pg-btn-wa" href={WA_LINK} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          Book via WhatsApp
        </a>
      </div>
    </section>
  )
}
