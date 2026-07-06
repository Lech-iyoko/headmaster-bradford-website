"use client"

import { useEffect, useRef } from "react"
import { PHONE_HREF, PhoneIcon, PinIcon } from "@/components/salon-ui"

const HERO_IMG = "/hero-model.webp"

/* Static base image + a displaced copy masked to the hair, driven by an
   animated SVG turbulence filter — a lively "wind through hair" motion.
   The face sits in the mask's transparent core, so it stays sharp. */
function HairFlow() {
  const imgCss: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "52% 18%",
  }
  const mask = "radial-gradient(ellipse 33% 46% at 52% 45%, transparent 55%, black 90%)"
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="hairFlow" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.013" numOctaves={2} seed={4} result="noise">
              <animate
                attributeName="baseFrequency"
                dur="9s"
                values="0.008 0.013;0.011 0.018;0.008 0.013"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.5;1"
                keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" xChannelSelector="R" yChannelSelector="G">
              <animate
                attributeName="scale"
                dur="7s"
                values="16;30;16"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.5;1"
                keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={HERO_IMG} alt="" style={imgCss} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hairflow-layer"
        src={HERO_IMG}
        alt="Voluminous, glossy styling at Julie's Hair Salon"
        style={{ ...imgCss, filter: "url(#hairFlow)", WebkitMaskImage: mask, maskImage: mask }}
      />
    </div>
  )
}

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    let raf = 0
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (photoRef.current) photoRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`
        if (contentRef.current) {
          contentRef.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 620))
        }
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="sl-root anim-in sl-hero">
      {/* full-bleed photo, right-weighted */}
      <div className="sl-hero-photo" ref={photoRef} style={{ willChange: "transform" }}>
        <div className="kenburns" style={{ position: "absolute", inset: 0 }}>
          <HairFlow />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, var(--slbg) 32%, oklch(0.08 0.01 55 / 0.8) 52%, oklch(0.08 0.01 55 / 0.1) 80%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, var(--slbg) 0%, oklch(0.08 0.01 55 / 0.2) 28%, transparent 55%)",
        }}
      />
      <div
        className="glow-breathe"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 75% 45%, oklch(0.72 0.12 82 / 0.14) 0%, transparent 65%)",
        }}
      />

      <div className="sl-hero-content" ref={contentRef} style={{ willChange: "transform, opacity" }}>
        <div style={{ maxWidth: 560 }}>
          <p className="sl-eyebrow track-in" style={{ ["--d" as string]: "0.1s", margin: "0 0 26px" }}>
            Shipley · Bradford
          </p>
          <h1 className="sl-h1" style={{ fontSize: "clamp(52px, 9vw, 92px)" }}>
            <span className="mask-line">
              <span className="gold" style={{ ["--d" as string]: "0.25s" }}>
                JULIE&apos;S
              </span>
            </span>
            <span className="mask-line" style={{ fontSize: "clamp(42px, 7.4vw, 76px)", marginTop: 6 }}>
              <span style={{ ["--d" as string]: "0.4s" }}>HAIR SALON</span>
            </span>
          </h1>
          <div className="sl-divider draw-x" style={{ ["--d" as string]: "0.7s", marginTop: 16 }} />
          <p
            className="sl-tagline fade-up"
            style={{ ["--d" as string]: "0.75s", fontSize: "clamp(21px, 3vw, 27px)", margin: "22px 0 0" }}
          >
            Beautiful Hair, Beautiful You
          </p>
          <div
            className="fade-up"
            style={{ ["--d" as string]: "0.95s", display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}
          >
            <a className="sl-btn sl-btn-gold" href={PHONE_HREF}>
              <PhoneIcon />
              Call to Book
            </a>
            <a className="sl-btn sl-btn-outline" href="#contact">
              <PinIcon />
              Find Us
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to top, var(--slbg), transparent)",
        }}
      />
    </div>
  )
}
