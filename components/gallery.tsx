"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { IMG } from "@/components/salon-ui"
import { Reveal } from "@/components/reveal"

const galleryImages = [
  { src: IMG.p1, alt: "Long dark wavy hair styling" },
  { src: IMG.p2, alt: "Platinum blonde blow-dry" },
  { src: IMG.p3, alt: "Beautiful curly dark hair" },
  { src: IMG.p4, alt: "Sleek straight hair with highlights" },
  { src: IMG.p5, alt: "Long boho braids" },
  { src: IMG.p6, alt: "Elegant straight styling" },
  { src: IMG.p7, alt: "Curly boho braids with blonde tips" },
  { src: IMG.p8, alt: "Curly braided extensions" },
  { src: IMG.p9, alt: "Grey box braids" },
  { src: IMG.p10, alt: "Two French braids" },
  { src: IMG.p11, alt: "Cornrow braids into ponytail" },
  { src: IMG.p12, alt: "Braided sides with curly top" },
  { src: IMG.p13, alt: "Long sleek blonde straight hair" },
  { src: IMG.p14, alt: "Platinum blonde straight hair" },
  { src: IMG.p15, alt: "Long feed-in braids with blonde ombre ends" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="pg-section alt" id="gallery">
      <Reveal>
        <div className="pg-head" style={{ alignItems: "center", textAlign: "center" }}>
          <p className="pg-eyebrow">Our work</p>
          <h2 className="pg-h2">Gallery</h2>
        </div>
      </Reveal>
      <div className="gallery-grid">
        {galleryImages.map((image, i) => (
          <Reveal
            key={i}
            variant="zoom"
            delay={(i % 4) * 0.06}
            className={"gal-tile" + (i % 2 === 0 ? " arch" : "")}
            style={{ aspectRatio: "4 / 5" }}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className="group"
              style={{ cursor: "pointer" }}
              aria-label={"View " + image.alt}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                style={{ objectPosition: "50% 20%", transition: "transform 0.5s ease" }}
                className="group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <VisuallyHidden>
            <DialogTitle>Gallery Image</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
