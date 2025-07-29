"use client"

import { useAdvancedScroll } from '../../hooks/useAdvancedScroll'

export default function ScrollFadeOverlay() {
  const { fadeOpacity } = useAdvancedScroll()

  return (
    <>
      {/* Top fade overlay */}
      <div 
        className="scroll-fade-overlay scroll-fade-top"
        style={{ opacity: fadeOpacity.top }}
      />
      
      {/* Bottom fade overlay */}
      <div 
        className="scroll-fade-overlay scroll-fade-bottom"
        style={{ opacity: fadeOpacity.bottom }}
      />
    </>
  )
}
