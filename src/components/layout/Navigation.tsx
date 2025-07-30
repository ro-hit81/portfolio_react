"use client"

import React, { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(229, 231, 235, 0.3)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logo Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
              }}
            >
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>RK</span>
            </div>
            <div style={{ display: 'none' }} className="md:block">
              <h1 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0' }}>
                Rohit Khati
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0' }}>EO & AI Expert</p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: '#64748b',
                  fontWeight: '500',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3b82f6';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#64748b';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Social Links & CTA */}
          <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="lg:flex">
            <a
              href="https://github.com/ro-hit81"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Github style={{ width: '20px', height: '20px' }} />
            </a>
            <a
              href="https://linkedin.com/in/rohitkhati"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Linkedin style={{ width: '20px', height: '20px' }} />
            </a>
            <a
              href="#contact"
              className="btn-primary"
              style={{ marginLeft: '8px' }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              cursor: 'pointer',
            }}
            className="lg:hidden"
          >
            {isOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ display: 'block', paddingTop: '16px', paddingBottom: '16px', borderTop: '1px solid #e2e8f0' }} className="lg:hidden">
            <div style={{ display: 'grid', gap: '8px' }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    color: '#64748b',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3b82f6';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64748b';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
                style={{ display: 'block', textAlign: 'center', width: '100%' }}
              >
                Let's Work Together
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
