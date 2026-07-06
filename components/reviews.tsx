import { Reveal } from "@/components/reveal"

const FB_PAGE = "https://www.facebook.com/profile.php?id=100028607544927"

export function Reviews() {
  return (
    <section className="pg-section" id="reviews">
      <Reveal>
        <div className="pg-head" style={{ alignItems: "center", textAlign: "center" }}>
          <p className="pg-eyebrow">Kind words</p>
          <h2 className="pg-h2">What clients say</h2>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="reviews-stat">
          <span className="reviews-stat-number">96%</span>
          <span className="reviews-stat-label">
            of clients recommend Julie
            <br />
            <a href={FB_PAGE} target="_blank" rel="noopener noreferrer">
              from 24 reviews on Facebook
            </a>
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.2} className="tst-card reviews-single">
        <p className="tst-quote">
          “Headmaster is the best salon in Bradford. Their work is impeccable! They are gifted.”
        </p>
        <span className="tst-name">— Chychy Angel, via Facebook</span>
      </Reveal>
    </section>
  )
}
