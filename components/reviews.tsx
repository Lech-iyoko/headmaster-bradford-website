import { Reveal } from "@/components/reveal"

const REVIEWS = [
  {
    q: "Julie transformed my hair — my knotless braids were neat, quick and pain-free. Best salon in Shipley by far.",
    n: "Amara O.",
  },
  {
    q: "Such a lovely, welcoming place. My weave looks completely natural and lasted for weeks. I wouldn't go anywhere else.",
    n: "Sharon B.",
  },
  {
    q: "Took my daughter for her first braids and Julie was so patient with her. Beautiful results — we'll be back!",
    n: "Kelly W.",
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
      <div className="reviews-grid">
        {REVIEWS.map((r, i) => (
          <Reveal key={i} delay={i * 0.1} className="tst-card">
            <span className="tst-stars">★★★★★</span>
            <p className="tst-quote">“{r.q}”</p>
            <span className="tst-name">— {r.n}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
