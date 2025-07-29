"use client"

import { useState, useEffect } from 'react'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll('section[id]')
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      
      let currentSection = 'home'
      let minDistance = Infinity
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionId = section.id
        
        // Calculate distance from center of viewport to center of section
        const sectionCenter = rect.top + rect.height / 2
        const viewportCenter = windowHeight / 2
        const distance = Math.abs(sectionCenter - viewportCenter)
        
        // Also check if section is prominently visible (at least 40% in viewport)
        const visibleTop = Math.max(0, -rect.top)
        const visibleBottom = Math.min(rect.height, windowHeight - rect.top)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const visibilityRatio = visibleHeight / windowHeight
        
        // Section is active if it's closest to center AND sufficiently visible
        if (distance < minDistance && visibilityRatio > 0.4) {
          minDistance = distance
          currentSection = sectionId
        }
        
        // Special case: if section takes up most of the viewport, it's definitely active
        if (visibilityRatio > 0.8) {
          currentSection = sectionId
        }
      })
      
      setActiveSection(currentSection)
    }

    // Initial check
    setTimeout(updateActiveSection, 200)

    // Throttled scroll handler
    let isScrolling = false
    const scrollHandler = () => {
      if (!isScrolling) {
        isScrolling = true
        requestAnimationFrame(() => {
          updateActiveSection()
          isScrolling = false
        })
      }
    }

    // Add event listeners
    window.addEventListener('scroll', scrollHandler, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    // Also listen for scroll end events (for scroll snap)
    let scrollEndTimer: NodeJS.Timeout
    const scrollEndHandler = () => {
      clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(updateActiveSection, 100)
    }
    
    window.addEventListener('scroll', scrollEndHandler, { passive: true })

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('scroll', scrollEndHandler)
      window.removeEventListener('resize', updateActiveSection)
      clearTimeout(scrollEndTimer)
    }
  }, [])

  return activeSection
}
