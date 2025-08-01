"use client"

import { useEffect } from 'react'

export const useScrollSnap = (onSectionChange?: (sectionId: string) => void) => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      
      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('section[id]')
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const windowHeight = window.innerHeight
        
        let currentSection = 0
        let closestSection = 'home'
        let minDistance = Infinity
        
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect()
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const sectionTop = rect.top + scrollTop
          const distance = Math.abs(rect.top)
          
          if (distance < minDistance) {
            minDistance = distance
            closestSection = section.id
            currentSection = index
          }
        })
        
        // Notify about section change
        if (onSectionChange) {
          onSectionChange(closestSection)
        }
        
        // Snap to the current section if we're close enough
        const targetSection = sections[currentSection]
        if (targetSection) {
          const rect = targetSection.getBoundingClientRect()
          const isClose = Math.abs(rect.top) < windowHeight / 4
          
          if (isClose && Math.abs(rect.top) > 20) {
            targetSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [onSectionChange])
}
