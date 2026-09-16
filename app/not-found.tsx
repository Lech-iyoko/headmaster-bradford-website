import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PHONE_HREF, PHONE_DISPLAY } from "@/components/salon-ui"

export default function NotFound() {
  return (
    <div className="pg site-v2" id="top">
      <Header />
      <section
        className="pg-section"
        style={{
          textAlign: "center",
          minHeight: "56vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className="pg-eyebrow">Page not found</p>
        <h1 className="pg-h2" style={{ marginTop: 12 }}>
          We couldn&apos;t find that page
        </h1>
        <p className="pg-body" style={{ maxWidth: 480, margin: "16px auto 32px" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back
          to beautiful hair.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="pg-btn pg-btn-gold">
            Back to homepage
          </Link>
          <a className="pg-btn pg-btn-line" href={PHONE_HREF}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
