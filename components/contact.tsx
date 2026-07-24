import {
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_HREF,
  WA_LINK,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/salon-ui"
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
          <p className="pg-eyebrow">Visit us</p>
          <h2 className="pg-h2">Contact &amp; opening hours</h2>
        </div>
      </Reveal>
      <div className="contact-grid">
        <Reveal delay={0}>
          <h3 className="pg-h3" style={{ marginBottom: 20 }}>
            Get in touch
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--ink-soft)" }}>
              <span style={{ color: "var(--acc)", marginTop: 2 }}>
                <PinIcon width={18} height={18} />
              </span>
              <p className="pg-body" style={{ fontSize: 16 }}>
                68b Briggate, Shipley
                <br />
                Bradford, BD17 5EP
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ color: "var(--acc)" }}>
                <PhoneIcon width={18} height={18} />
              </span>
              <a
                className="pg-body"
                style={{ fontSize: 16, color: "var(--ink)", textDecoration: "none", fontWeight: 600 }}
                href={PHONE_HREF}
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
              <a className="pg-btn pg-btn-wa" href={WA_LINK} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <a className="pg-btn pg-btn-line" href={PHONE_HREF}>
                Call to book
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="pg-h3" style={{ marginBottom: 12 }}>
            Opening hours
          </h3>
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
