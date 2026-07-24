import { PHONE_HREF, WA_LINK, PhoneIcon, WhatsAppIcon } from "@/components/salon-ui"
import { Reveal } from "@/components/reveal"

const PRICES_L = [
  { n: "Weave", p: "from £65" },
  { n: "Remove Weave & Wash", p: "£25" },
  { n: "Single Braids", p: "from £110" },
  { n: "Remove Single Braids & Wash", p: "£45" },
  { n: "Wash & Dry", p: "£20" },
]
const PRICES_R = [
  { n: "Ladies Cornrows with Extensions", p: "from £45" },
  { n: "Ladies Natural Hair Cornrows", p: "£35" },
  { n: "Boys Cornrows", p: "from £35" },
  { n: "Crochet Weave", p: "£75" },
  { n: "Hair Relaxing", p: "£60" },
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
            Weaves · Braids · Cornrows · Crochet · Hair Relaxing
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
