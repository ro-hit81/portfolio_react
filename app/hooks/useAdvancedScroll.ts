"use client"

import { useState, useEffect, useCallback, useMemo } from 'react'

interface ScrollState {
  activeSection: string
  isScrolling: boolean
  scrollDirection: 'up' | 'down' | null
}

export const useAdvancedScroll = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    activeSection: 'home',
    isScrolling: false,
    scrollDirection: null
  })

  const [fadeOpacity, setFadeOpacity] = useState({ top: 0, bottom: 0 })

  const sections = useMemo(() => ['home', 'about', 'skills', 'projects', 'awards', 'contact'], [])

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Calculate fade overlay opacity
    const topFade = Math.min(scrollY / 300, 0.7) // More gradual fade
    const bottomFade = Math.min((documentHeight - scrollY - windowHeight) / 300, 0.7)

    setFadeOpacity({
      top: topFade,
      bottom: bottomFade
    })

    // Improved active section detection for scroll snap
    let newActiveSection = 'home'
    const navHeight = 80
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const scrollPosition = scrollY + navHeight + 50 // Account for navigation height

    // Find which section is most visible in the viewport
    let maxVisibility = 0
    let mostVisibleSection = 'home'

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrollY
        const elementBottom = elementTop + rect.height
        
        // Calculate how much of the section is visible
        const viewportTop = scrollY + navHeight
        const viewportBottom = scrollY + windowHeight
        
        const visibleTop = Math.max(elementTop, viewportTop)
        const visibleBottom = Math.min(elementBottom, viewportBottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const visibility = visibleHeight / windowHeight
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility
          mostVisibleSection = sectionId
        }
      }
    })

    newActiveSection = mostVisibleSection

    // Apply fade effects to sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2
        
        if (isVisible) {
          element.classList.add('fade-in')
          element.classList.remove('fade-out')
        } else {
          element.classList.add('fade-out')
          element.classList.remove('fade-in')
        }
      }
    })

    setScrollState(prev => ({
      ...prev,
      activeSection: newActiveSection
    }))
  }, [sections])

  // Detect scroll direction and handle snap behavior
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    let scrollTimeout: NodeJS.Timeout

    const updateScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'

      setScrollState(prev => ({
        ...prev,
        isScrolling: true,
        scrollDirection: direction
      }))

      handleScroll()

      // Clear existing timeout
      clearTimeout(scrollTimeout)

      // Set new timeout to detect scroll end
      scrollTimeout = setTimeout(() => {
        setScrollState(prev => ({
          ...prev,
          isScrolling: false,
          scrollDirection: null
        }))
      }, 100) // Reduced timeout for better snap responsiveness

      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    // Handle wheel events for better scroll snapping
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onWheel = (e: WheelEvent) => {
      // Let CSS scroll-snap handle the snapping behavior
      // This just updates our state
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    // Initial call
    handleScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      clearTimeout(scrollTimeout)
    }
  }, [handleScroll])

  return {
    ...scrollState,
    fadeOpacity
  }
}
