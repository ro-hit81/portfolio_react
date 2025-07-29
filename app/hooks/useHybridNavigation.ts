"use client"

import { useState, useEffect } from 'react'

export const useHybridNavigation = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'awards', 'contact']
      const scrollPosition = window.scrollY + 100
      
      let newActiveSection = 'home'
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sections[i])
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop
          if (scrollPosition >= sectionTop - 50) {
            newActiveSection = sections[i]
            break
          }
        }
      }
      
      setActiveSection(newActiveSection)
    }

    setTimeout(updateActiveSection, 500)
    window.addEventListener('scroll', updateActiveSection)
    
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return activeSection
}
