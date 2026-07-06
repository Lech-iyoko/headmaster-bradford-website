import { PHONE_HREF, WA_LINK, WhatsAppIcon } from "@/components/salon-ui"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="pg-header">
      <a className="pg-logo" href="#top">
        JULIE&apos;S <span className="gold">HAIR SALON</span>
      </a>
      <nav className="pg-nav">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a
          className="pg-btn pg-btn-wa"
          style={{ padding: "12px 20px" }}
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Message on WhatsApp"
        >
          <WhatsAppIcon />
          <span className="wa-label">WhatsApp</span>
        </a>
        <a className="pg-btn pg-btn-dark" style={{ padding: "12px 22px" }} href={PHONE_HREF}>
          Book Now
        </a>
      </div>
    </header>
  )
}
