import React from 'react'
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react'

const Awards = () => {
  const awards = [
    {
      title: 'Best Innovation in Earth Observation',
      organization: 'International Space Conference 2023',
      year: '2023',
      description: 'Recognized for groundbreaking work in AI-powered climate monitoring systems.',
      icon: Trophy,
    },
    {
      title: 'Young Researcher Award',
      organization: 'IEEE Geoscience Society',
      year: '2022',
      description: 'Awarded for outstanding contributions to remote sensing and machine learning.',
      icon: Star,
    },
    {
      title: 'Excellence in Satellite Data Analytics',
      organization: 'European Space Agency',
      year: '2022',
      description: 'Recognized for innovative approaches to processing large-scale satellite imagery.',
      icon: Medal,
    },
    {
      title: 'AI for Good Challenge Winner',
      organization: 'UN Global Pulse',
      year: '2021',
      description: 'First place in developing AI solutions for sustainable development goals.',
      icon: Target,
    },
    {
      title: 'Research Publication Award',
      organization: 'Remote Sensing Journal',
      year: '2021',
      description: 'Best paper award for research on deep learning applications in Earth Observation.',
      icon: Award,
    },
    {
      title: 'Innovation Excellence',
      organization: 'National Academy of Sciences',
      year: '2020',
      description: 'Recognition for pioneering work in automated satellite image analysis.',
      icon: Zap,
    },
  ]

  return (
    <section className="container">
      <h2 className="gradient-text mb-8">Awards & Recognition</h2>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        Honored to receive recognition for contributions to Earth Observation and AI research, 
        driving innovation in satellite technology and sustainable development.
      </p>
      
      <div className="grid grid-3">
        {awards.map((award, index) => (
          <div key={index} className="card text-center">
            <div 
              className="flex-center mx-auto mb-4"
              style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '50%',
              }}
            >
              <award.icon className="w-7 h-7" style={{ color: 'white' }} />
            </div>
            
            <div 
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '12px',
              }}
            >
              {award.year}
            </div>
            
            <h3 className="mb-2">{award.title}</h3>
            <p style={{ fontWeight: '600', color: '#3b82f6', margin: '0 0 12px 0' }}>
              {award.organization}
            </p>
            <p style={{ fontSize: '0.875rem', margin: '0' }}>
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards
