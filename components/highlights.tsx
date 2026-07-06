import { IMG, ScissorsIcon, SparklesIcon, HeartIcon } from "@/components/salon-ui"
import { Reveal } from "@/components/reveal"

const HL_DATA = [
  {
    icon: <ScissorsIcon width={24} height={24} />,
    title: "10+ Years of Experience",
    desc: "Over a decade of hairdressing expertise, from Bradford to the heart of Shipley.",
  },
  {
    icon: <HeartIcon width={24} height={24} />,
    title: "Every Hair Type Welcome",
    desc: "From fine and straight to curls, coils and afro textures — Julie styles hair types 1 to 4.",
  },
  {
    icon: <SparklesIcon width={24} height={24} />,
    title: "Braids, Extensions & Styling",
    desc: "Specialists in braids, crochet, weaving extensions, and creative hairstyling.",
  },
]

export function Highlights() {
  const photo = (
    <div style={{ position: "relative" }}>
      <div
        style={{
          borderRadius: "200px 200px 16px 16px",
          overflow: "hidden",
          aspectRatio: "4 / 5",
          boxShadow: "0 24px 50px -22px oklch(0.3 0.05 70 / 0.4)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.p1}
          alt="Signature styling at Julie's"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 16,
          left: -16,
          right: 16,
          bottom: -16,
          border: "1px solid var(--acc-soft)",
          borderRadius: "210px 210px 20px 20px",
          pointerEvents: "none",
        }}
      />
    </div>
  )

  return (
    <section className="pg-section alt">
      <div className="hl-grid">
        <Reveal variant="left">
          <div className="pg-head" style={{ marginBottom: 40 }}>
            <p className="pg-eyebrow">Why Julie&apos;s</p>
            <h2 className="pg-h2">First-class hair care, right here in Shipley</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            {HL_DATA.map((it, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--pg-bg)",
                    border: "1px solid var(--line)",
                    color: "var(--acc)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  {it.icon}
                </div>
                <div>
                  <h3 className="pg-h3" style={{ marginBottom: 6, fontSize: 22 }}>
                    {it.title}
                  </h3>
                  <p className="pg-body" style={{ fontSize: 16.5 }}>
                    {it.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal variant="right" delay={0.1}>
          {photo}
        </Reveal>
      </div>
    </section>
  )
}
