import { Reveal } from "@/components/reveal"

// Real client reviews (lightly tidied for spelling/caps, wording unchanged)
const REVIEWS = [
  {
    q: "Definitely found a new place to get my weave in, my hair looks gorgeous… The staff was very welcoming and polite. Great customer service. I left the shop a very satisfied customer.",
    n: "Larelle Ellsworth",
  },
  {
    q: "Been having my hair done at this fantastic place for the past 4 years… My weaves have been amazing and have lasted for three months! My hair has grown and is in great condition. Would never go anywhere else!",
    n: "Rachael Keighley",
  },
  {
    q: "Luv my daughter's hair, had so many people asking where she got it done. Beautiful results.",
    n: "Dinky Campbell",
  },
]

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
          <span className="reviews-stat-label">client satisfaction rate</span>
        </div>
      </Reveal>
      <div className="reviews-grid">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.n} delay={0.15 + i * 0.1} className="tst-card">
            <p className="tst-quote">“{r.q}”</p>
            <span className="tst-name">{r.n}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
