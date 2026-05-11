"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

interface FadeInProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
  amount?: number
}

const getOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance }
    case "down":
      return { y: -distance }
    case "left":
      return { x: distance }
    case "right":
      return { x: -distance }
    default:
      return {}
  }
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 24,
  className,
  once = true,
  amount = 0.2,
}: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...getOffset(direction, distance) },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  once?: boolean
  amount?: number
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  once = true,
  amount = 0.15,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
  duration?: number
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 24,
  duration = 0.6,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...getOffset(direction, distance) },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
