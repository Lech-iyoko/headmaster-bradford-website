"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { FadeIn } from "@/components/motion/fade-in"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-TDm6UrU4wbO2Z1IuE4aIcmUqRPx8HP.jpg",
    alt: "Long dark wavy hair styling",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-3jyqEoYwaKG6PG0guS12L8PIGMlFll.jpg",
    alt: "Beautiful curly dark hair",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-wbHo4XRMBZl1rDW7MxAnvNXV8ByafQ.jpg",
    alt: "Sleek straight hair with highlights",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p6-Agw6sWb5thpAJY8lHrPyW8P9MZsOtJ.jpg",
    alt: "Elegant straight styling",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p9-yHeiV3lyZPLfH9Wq1Ork2PM2DMA6vI.jpg",
    alt: "Grey box braids",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p5-h5nwfCCPYoXOldW5BoYpEKGOFPXLZy.jpg",
    alt: "Long boho braids",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p7-GvKS9MXEBMAb1i7Ek6xAafcSZfzZid.jpg",
    alt: "Curly boho braids with blonde tips",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p8-YBuFucnumbnW51YKq3ksXn93U943YO.jpg",
    alt: "Curly braided extensions",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p10-NVATqkLe7bVE80t3hSSnOvdjv8gjMz.jpg",
    alt: "Two French braids",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p11-lABYruSygZRHVBiHAmCa9KhNBr8Amz.jpg",
    alt: "Cornrow braids into ponytail",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p12-94wbobafcuMkVqdK9XZV6gasl7UGtG.jpg",
    alt: "Braided sides with curly top",
  },
  {
    src: "/gallery/p15.jpg",
    alt: "Long feed-in braids with blonde ombre ends",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p14-o6X5nZ3eZ3vGByYgrrXDQW7egPeHf2.jpg",
    alt: "Platinum blonde straight hair",
  },
  {
    src: "/gallery/p13.jpg",
    alt: "Long sleek blonde straight hair",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Browse through some of our favourite styles. From elegant cuts to creative braids, every client leaves feeling amazing.
          </p>
        </FadeIn>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06 },
            },
          }}
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <VisuallyHidden>
            <DialogTitle>Gallery Image</DialogTitle>
          </VisuallyHidden>
          <AnimatePresence mode="wait">
            {selectedImage && (
              <motion.div
                key={selectedImage}
                className="relative aspect-[3/4] md:aspect-[4/5] w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-contain rounded-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  )
}
