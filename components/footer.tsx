import { PHONE_DISPLAY, PHONE_HREF, WA_LINK } from "@/components/salon-ui"

export function Footer() {
  return (
    <footer className="pg-footer">
      <div className="footer-grid" style={{ marginBottom: 48 }}>
        <div>
          <p style={{ font: "700 24px/1 var(--slserif)", color: "oklch(0.95 0.015 80)", margin: "0 0 12px" }}>
            JULIE&apos;S <span style={{ color: "oklch(0.72 0.12 82)" }}>HAIR SALON</span>
          </p>
          <p
            style={{
              font: "italic 400 17px/1.5 var(--slserif)",
              color: "oklch(0.72 0.12 82 / 0.7)",
              margin: "0 0 18px",
            }}
          >
            Beautiful Hair, Beautiful You
          </p>
          <p style={{ font: "400 15px/1.7 var(--slsans)", margin: 0, color: "oklch(0.65 0.02 80)" }}>
            Hairstyling · Braids · Crochet Extensions
            <br />
            Weaving Extensions · Hair Treatments
          </p>
        </div>
        <div>
          <p className="foot-h">Contact</p>
          <p style={{ font: "400 15px/1.9 var(--slsans)", margin: 0, color: "oklch(0.65 0.02 80)" }}>
            68b Briggate, Shipley
            <br />
            Bradford, BD17 5EP
            <br />
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <br />
            <a href={WA_LINK} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
          </p>
        </div>
        <div>
          <p className="foot-h">Hours</p>
          <p style={{ font: "400 15px/1.9 var(--slsans)", margin: 0, color: "oklch(0.65 0.02 80)" }}>
            Tue – Fri&ensp;9:30 AM – 6:00 PM
            <br />
            Saturday&ensp;9:00 AM – 5:00 PM
            <br />
            Sun &amp; Mon&ensp;Closed
          </p>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid oklch(0.72 0.12 82 / 0.2)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <span style={{ font: "400 13px/1 var(--slsans)", color: "oklch(0.55 0.02 80)" }}>
          {new Date().getFullYear()} © Julie&apos;s Hair Salon. All rights reserved.
        </span>
        <span style={{ font: "400 13px/1 var(--slsans)", color: "oklch(0.55 0.02 80)" }}>
          68b Briggate, Shipley, Bradford
        </span>
      </div>
    </footer>
  )
}
