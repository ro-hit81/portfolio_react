import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohit.khati@example.com',
      href: 'mailto:rohit.khati@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ro-hit81',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohitkhati',
    },
  ]

  return (
    <section className="container">
      <h2 className="gradient-text mb-8">Get In Touch</h2>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        Ready to collaborate on exciting Earth Observation and AI projects? Let&apos;s discuss how we can 
        work together to create innovative solutions that make a positive impact.
      </p>
      
      <div className="grid grid-2">
        {/* Contact Information */}
        <div>
          <h3 className="mb-6">Let&apos;s Connect</h3>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="flex items-center">
                  <div 
                    className="flex-center mr-4"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      borderRadius: '12px',
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: 'white' }} />
                  </div>
                  <div>
                    <p style={{ margin: '0', fontSize: '0.875rem', color: '#64748b' }}>
                      {item.label}
                    </p>
                    <p style={{ margin: '0', fontWeight: '600' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div>
            <h4 className="mb-4">Follow Me</h4>
            <div className="flex" style={{ gap: '12px' }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '12px' }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="card">
          <h3 className="mb-6">Send a Message</h3>
          <form style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Name
              </label>
              <input 
                type="text"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Email
              </label>
              <input 
                type="email"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Subject
              </label>
              <input 
                type="text"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
                placeholder="Project collaboration"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Message
              </label>
              <textarea 
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical',
                }}
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button 
              type="submit"
              className="btn-primary"
              style={{ justifySelf: 'start' }}
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
