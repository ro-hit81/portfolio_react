"use client"

import { useEffect, useState, useRef } from 'react'

interface ScrollEffectOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export const useScrollEffect = (options: ScrollEffectOptions = {}) => {
  const [isVisible, setIsVisible] = useState(true) // Default to visible
  const [isExiting, setIsExiting] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false,
    delay = 0
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is entering the viewport
          setTimeout(() => {
            setIsExiting(false)
            setIsVisible(true)
          }, delay)
        } else {
          // Element is outside viewport
          if (!triggerOnce) {
            const rect = entry.boundingClientRect
            if (rect.bottom < 100) {
              // Element has scrolled past (above viewport)
              setIsExiting(true)
            } else {
              // Element is below viewport (not reached yet) 
              setIsVisible(false)
              setIsExiting(false)
            }
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, delay])

  const getClassName = () => {
    if (isExiting) return 'section-scroll-effect section-exiting'
    if (isVisible) return 'section-scroll-effect section-visible'
    return 'section-scroll-effect section-entering'
  }

  return {
    ref: elementRef,
    isVisible,
    isExiting,
    className: getClassName()
  }
}
