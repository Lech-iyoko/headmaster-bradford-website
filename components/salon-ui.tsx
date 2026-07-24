// Shared constants + icons for Julie's Hair Salon (champagne theme)

export const PHONE_DISPLAY = "07717 163988"
export const PHONE_HREF = "tel:+447717163988"
export const WA_LINK = "https://wa.me/447717163988"
export const MAPS_LINK =
  "https://maps.google.com/?q=68b+Briggate,+Shipley,+Bradford+BD17+5EP"

// Portrait / styling photos, served from public/gallery (1200px webp)
export const IMG = {
  p1: "/gallery/p1.webp",
  p2: "/gallery/p2.webp",
  p3: "/gallery/p3.webp",
  p4: "/gallery/p4.webp",
  p5: "/gallery/p5.webp",
  p6: "/gallery/p6.webp",
  p7: "/gallery/p7.webp",
  p8: "/gallery/p8.webp",
  p9: "/gallery/p9.webp",
  p10: "/gallery/p10.webp",
  p11: "/gallery/p11.webp",
  p12: "/gallery/p12.webp",
  p13: "/gallery/p13.webp",
  p14: "/gallery/p14.webp",
  p15: "/gallery/p15.webp",
  julie: "/gallery/julie-v2.webp",
}

type IconProps = React.SVGProps<SVGSVGElement>

const Stroke = ({ children, ...p }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    {children}
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Stroke>
)

export const PinIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
)

export const ScissorsIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="6" cy="6" r="3" />
    <path d="M8.12 8.12 12 12" />
    <path d="M20 4 8.12 8.12" />
    <circle cx="6" cy="18" r="3" />
    <path d="M14.8 14.8 20 20" />
    <path d="M8.12 15.88 12 12" />
  </Stroke>
)

export const SparklesIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
  </Stroke>
)

export const HeartIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </Stroke>
)

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.9.9-3.05-.2-.31a8.2 8.2 0 1 1 6.9 3.8Zm4.5-6.15c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.38-2-1.23a7.4 7.4 0 0 1-1.38-1.72c-.14-.25 0-.38.11-.5.11-.12.25-.3.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.57.12.17 1.76 2.67 4.25 3.74.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" />
  </svg>
)
