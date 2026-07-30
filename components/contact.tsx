import { MAPS_LINK, PinIcon } from "@/components/salon-ui"
import { Reveal } from "@/components/reveal"

const HOURS: [string, string][] = [
  ["Monday", "Closed"],
  ["Tuesday", "10:30 AM – 5:00 PM"],
  ["Wednesday", "10:30 AM – 5:00 PM"],
  ["Thursday", "10:30 AM – 5:00 PM"],
  ["Friday", "10:30 AM – 5:00 PM"],
  ["Saturday", "10:00 AM – 5:30 PM"],
  ["Sunday", "Closed"],
]

export function Contact() {
  return (
    <section className="pg-section alt" id="contact">
      <Reveal>
        <div className="pg-head">
          <h2 className="pg-h2">Opening hours</h2>
        </div>
      </Reveal>
      <div className="contact-grid">
        <Reveal delay={0.08}>
          {HOURS.map(([d, t], i) => (
            <div key={i} className="hrs-row">
              <span className="d">{d}</span>
              <span className={"t" + (t === "Closed" ? " closed" : "")}>{t}</span>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.16}>
        <a className="map-card" href={MAPS_LINK} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <div className="map-grid" />
          <div
            style={{
              position: "relative",
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "var(--acc)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PinIcon width={18} height={18} />
          </div>
          <p className="pg-body" style={{ position: "relative", fontWeight: 600, color: "var(--ink)", textAlign: "center" }}>
            68b Briggate, Shipley
          </p>
          <span className="pg-btn pg-btn-dark" style={{ position: "relative", padding: "12px 22px", fontSize: 14 }}>
            Open in Google Maps
          </span>
        </a>
        </Reveal>
      </div>
    </section>
  )
}
