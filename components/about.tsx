import { IMG, PHONE_DISPLAY, PHONE_HREF, WA_LINK, PhoneIcon, WhatsAppIcon } from "@/components/salon-ui"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section className="pg-section" id="about">
      <div className="about-grid">
        <Reveal variant="left">
          <div className="pg-head" style={{ marginBottom: 28 }}>
            <p className="pg-eyebrow">Our Story</p>
            <h2 className="pg-h2">Making Shipley look beautiful, one style at a time</h2>
          </div>
          <p className="pg-body" style={{ marginBottom: 18 }}>
            At Julie&apos;s Hair Salon we celebrate every hair texture. From protective braids and crochet
            styles to weaving extensions and nourishing treatments, every appointment starts with a personal
            consultation — so you leave with a style that&apos;s truly yours.
          </p>
          <p className="pg-body" style={{ marginBottom: 32 }}>
            You&apos;ll find us at 68b Briggate in the heart of Shipley: a warm, relaxed salon where you can
            switch off, be looked after, and walk out feeling like the best version of you.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="pg-btn pg-btn-gold" href={PHONE_HREF}>
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a className="pg-btn pg-btn-line" href={WA_LINK} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              Message on WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal variant="right" delay={0.1} className="about-photos">
          <div className="gal-tile" style={{ aspectRatio: "3 / 4" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.julie}
              alt="Julie, your Shipley hair stylist"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 15%" }}
            />
          </div>
          <div className="gal-tile" style={{ aspectRatio: "3 / 4", marginTop: 36 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.p6}
              alt="Elegant styling at Julie's Hair Salon"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
