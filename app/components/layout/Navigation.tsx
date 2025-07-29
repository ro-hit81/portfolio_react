"use client"

import React, { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { useAdvancedScroll } from '../../hooks/useAdvancedScroll'
import styles from '../../styles/components/Navigation.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeSection } = useAdvancedScroll()

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Awards', href: 'awards' },
    { label: 'Contact', href: 'contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    console.log('Trying to scroll to section:', sectionId) // Debug log
    const element = document.getElementById(sectionId)
    console.log('Element found:', element) // Debug log
    
    if (element) {
      // Use the element's scrollIntoView method for more reliable scrolling
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    } else {
      console.error('Section not found:', sectionId) // Debug log
    }
    // Close mobile menu after clicking
    setIsOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          
          {/* Logo Section */}
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.logoText}>RK</span>
            </div>
            <div className={styles.logoInfo}>
              <h1 className={styles.logoTitle}>
                Rohit Khati
              </h1>
              <p className={styles.logoSubtitle}>EO & AI Expert</p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className={styles.desktopMenu}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`${styles.navButton} ${activeSection === item.href ? styles.active : ''}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/ro-hit81"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/rhtkht/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`${styles.mobileNavButton} ${activeSection === item.href ? styles.active : ''}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className={styles.mobileSocialLinks}>
            <a
              href="https://github.com/ro-hit81"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rohitkhati"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
