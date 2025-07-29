"use client"

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const emailSubject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website')
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      )
      
      const mailtoLink = `mailto:rhtkhati@gmail.com?subject=${emailSubject}&body=${emailBody}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setSubmitStatus('success')
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      console.error('Error opening email client:', error)
      setSubmitStatus('error')
      
      // Reset status after 5 seconds
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
                name="subject"
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
              {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                ✅ Your email client should open with the message pre-filled. Please send it from there!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                ❌ Unable to open email client. Please email me directly at rhtkhati@gmail.com
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Let's Connect</h3>
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
    </section>
  )
}

export default Contact
