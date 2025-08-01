"use client"

import { useState, useEffect } from 'react'

export const useIntersectionNavigation = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    
    // Wait for components to be fully rendered
    const initializeObserver = () => {
      const sections = document.querySelectorAll('section[id]')

      if (sections.length === 0) {
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          // Create a map of all currently intersecting sections
          const intersectingSections = new Map()
          
          entries.forEach((entry) => {
            const ratio = entry.intersectionRatio
            const id = entry.target.id
            
            if (entry.isIntersecting) {
              intersectingSections.set(id, ratio)
            }
          })
          
          // If we have intersecting sections, find the best one
          if (intersectingSections.size > 0) {
            // Sort by intersection ratio and pick the highest
            const sortedSections = Array.from(intersectingSections.entries())
              .sort((a, b) => b[1] - a[1])
            
            const [bestSectionId, bestRatio] = sortedSections[0]
            
            // Set active if ratio is significant enough
            if (bestRatio > 0.2) { // Lowered threshold for About section
              setActiveSection(bestSectionId)
            }
          }
        },
        {
          root: null,
          rootMargin: '-10% 0px -10% 0px', // Reduced margin to catch About section better
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
        }
      )

      // Observe all sections
      sections.forEach((section) => {
        observer!.observe(section)
      })
    }

    // Initialize with a delay to ensure components are rendered
    const timeoutId = setTimeout(initializeObserver, 500)

    return () => {
      clearTimeout(timeoutId)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return activeSection
}
