"use client"

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import ThankYouPopup from '../ui/ThankYouPopup'
import styles from '../../styles/components/Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showThankYouPopup, setShowThankYouPopup] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const fieldName = name === 'user_subject' ? 'subject' : name
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Contact from Portfolio Website',
          message: formData.message,
          // Additional Web3Forms fields
          "from_name": formData.name,
          "reply_to": formData.email,
          "to_email": "rhtkhati@gmail.com"
        })
      })

      const result = await response.json()

      if (result.success) {
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setSubmitStatus('success')
        setShowThankYouPopup(true)
      } else {
        setSubmitStatus('error')
      }
      
      // Reset error status after 5 seconds (success is handled by popup)
      if (submitStatus === 'error') {
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      }
      
    } catch (error) {
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rhtkhati@gmail.com",
      link: "mailto:rhtkhati@gmail.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+33 (0) 780846313",
      link: "tel:+33780846313"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Vannes 56000, France",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ro-hit81",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rhtkht/", 
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://x.com/rohitkhati713",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:rhtkhati@gmail.com",
      label: "Email"
    }
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Get In Touch
        </h2>

        <div className={styles.contactContent}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              const content = (
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <IconComponent size={20} />
                  </div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>{info.label}</div>
                    <div className={styles.contactValue}>{info.value}</div>
                  </div>
                </div>
              )

              return info.link ? (
                <a key={index} href={info.link} className={styles.contactItem}>
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            {/* Web3Forms Access Key - Hidden Field */}
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"} />
            
            {/* Web3Forms Configuration */}
            <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="user_subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`${styles.formInput} ${styles.formTextarea}`}
                required
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                ❌ Oops! There was an error sending your message. Please try again or email me directly at rhtkhati@gmail.com
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Let&apos;s Connect</h3>
          <p className={styles.socialSubtitle}>
            Follow me on social media or connect professionally
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <IconComponent size={24} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Thank You Popup */}
      <ThankYouPopup 
        isVisible={showThankYouPopup} 
        onClose={() => {
          setShowThankYouPopup(false)
          setSubmitStatus('idle')
        }} 
      />
    </section>
  )
}

export default Contact
