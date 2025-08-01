"use client"

import React, { useEffect, useState } from 'react'
import { CheckCircle, X } from 'lucide-react'
import styles from './ThankYouPopup.module.css'

interface ThankYouPopupProps {
  isVisible: boolean
  onClose: () => void
}

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ isVisible, onClose }) => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isVisible) {
      // Delay content animation to allow backdrop animation first
      const timer = setTimeout(() => setShowContent(true), 300)
      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      // Auto close after 5 seconds
      const autoCloseTimer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(autoCloseTimer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className={styles.content}>
          <div className={`${styles.iconContainer} ${showContent ? styles.iconVisible : ''}`}>
            <CheckCircle className={styles.checkIcon} size={80} />
            <div className={styles.ripple}></div>
            <div className={styles.ripple2}></div>
          </div>
          
          <div className={`${styles.textContainer} ${showContent ? styles.textVisible : ''}`}>
            <h2 className={styles.title}>Thank You!</h2>
            <p className={styles.message}>
              Your message has been sent successfully.<br />
              I&apos;ll get back to you soon.
            </p>
            <p className={styles.signature}>
              Warm Regards,<br />
              <span className={styles.name}>Rohit</span>
            </p>
          </div>
          
          <div className={styles.sparkles}>
            <div className={styles.sparkle}></div>
            <div className={styles.sparkle}></div>
            <div className={styles.sparkle}></div>
            <div className={styles.sparkle}></div>
            <div className={styles.sparkle}></div>
            <div className={styles.sparkle}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPopup
