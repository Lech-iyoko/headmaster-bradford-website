"use client"

import { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  /** entrance delay in seconds (for staggering) */
  delay?: number
  /** motion style */
  variant?: "up" | "left" | "right" | "zoom"
  className?: string
  style?: React.CSSProperties
  as?: "div" | "section" | "li"
}

export function Reveal({ children, delay = 0, variant = "up", className, style, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const Tag = as as React.ElementType
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${shown ? " in-view" : ""}${className ? " " + className : ""}`}
      style={{ ...style, ["--rd" as string]: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
