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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rohit.khati@example.com",
      link: "mailto:rohit.khati@example.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "San Francisco, CA",
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
      href: "https://linkedin.com/in/rohitkhati", 
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/rohitkhati",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:rohit.khati@example.com",
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

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
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
