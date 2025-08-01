"use client"

import { useState, useEffect, useRef } from 'react'

export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const activeSectionRef = useRef('home')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]')).map(section => ({
      id: section.id,
      element: section as HTMLElement
    }))

    if (sections.length === 0) {
      return
    }

    const updateActiveSection = () => {
      const windowHeight = window.innerHeight
      const scrollTop = window.scrollY
      let newActiveSection = 'home'
      
      // Simple approach: find the section that's most visible
      let maxVisibleHeight = 0
      let selectedSection = 'home'
      
      sections.forEach(({ id, element }) => {
        const rect = element.getBoundingClientRect()
        const visibleHeight = Math.max(0, 
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        )
        
        // Select the section with the most visible content
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight
          selectedSection = id
        }
      })
      
      // Only change if there's significant visible content (at least 30% of viewport)
      if (maxVisibleHeight > windowHeight * 0.3) {
        newActiveSection = selectedSection
      } else if (scrollTop < 100) {
        newActiveSection = 'home'
      }
      
      if (newActiveSection !== activeSectionRef.current) {
        activeSectionRef.current = newActiveSection
        setActiveSection(newActiveSection)
      }
    }

    // Initial check
    setTimeout(updateActiveSection, 300)

    // Throttled scroll handler
    let isUpdating = false
    const scrollHandler = () => {
      if (!isUpdating) {
        isUpdating = true
        requestAnimationFrame(() => {
          updateActiveSection()
          isUpdating = false
        })
      }
    }

    // Handle scroll end for snap behavior
    let scrollEndTimer: NodeJS.Timeout
    const scrollEndHandler = () => {
      clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(() => {
        updateActiveSection()
        
        // Optional: Add gentle snap behavior
        const activeElement = sections.find(s => s.id === activeSectionRef.current)?.element
        if (activeElement) {
          const rect = activeElement.getBoundingClientRect()
          const offset = Math.abs(rect.top)
          
          // If section is close but not perfectly aligned, snap it
          if (offset > 10 && offset < 100) {
            activeElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }, 200)
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    window.addEventListener('scroll', scrollEndHandler, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('scroll', scrollEndHandler)
      window.removeEventListener('resize', updateActiveSection)
      clearTimeout(scrollEndTimer)
    }
  }, []) // Remove activeSection from dependency array

  return activeSection
}
