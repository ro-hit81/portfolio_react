import React from 'react'
import { Satellite, Brain, Award, Users, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Started Journey in EO',
      description: 'Began exploring Earth Observation and satellite imagery analysis during undergraduate studies',
      icon: Satellite,
    },
    {
      year: '2020',
      title: 'AI & ML Specialization',
      description: 'Dive deep into machine learning algorithms and their applications in geospatial analysis',
      icon: Brain,
    },
    {
      year: '2021',
      title: 'Professional Experience',
      description: 'Started working on real-world EO projects with industry-leading organizations',
      icon: Award,
    },
    {
      year: '2022',
      title: 'Research & Innovation',
      description: 'Published research papers and developed innovative solutions for climate monitoring',
      icon: Lightbulb,
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple awards for contributions to Earth Observation and AI',
      icon: Target,
    },
  ]

  const expertise = [
    { 
      icon: Satellite, 
      title: 'Earth Observation', 
      description: 'Satellite imagery analysis, remote sensing, and geospatial data processing',
    },
    { 
      icon: Brain, 
      title: 'Artificial Intelligence', 
      description: 'Machine learning, deep learning, and computer vision applications',
    },
    { 
      icon: Users, 
      title: 'Team Leadership', 
      description: 'Leading cross-functional teams and mentoring junior developers',
    },
  ]

  return (
    <section className="container">
      <h2 className="gradient-text mb-8">About Me</h2>
      
      <div className="grid grid-2 mb-8">
        <div>
          <h3 className="mb-4">Passionate About Innovation</h3>
          <p className="mb-4">
            I'm a dedicated Earth Observation and AI specialist with over 5 years of experience 
            in transforming satellite data into actionable insights. My journey began with a 
            fascination for space technology and has evolved into a career focused on solving 
            real-world challenges through innovative AI solutions.
          </p>
          <p className="mb-4">
            Based in India, I've had the privilege of working on projects ranging from climate 
            monitoring to agricultural optimization, always with the goal of making a positive 
            impact on our planet and society.
          </p>
          <p>
            When I'm not analyzing satellite imagery or training neural networks, you'll find 
            me exploring new technologies, contributing to open-source projects, or sharing 
            knowledge with the community through talks and workshops.
          </p>
        </div>
        
        <div className="grid" style={{ gap: '20px' }}>
          {expertise.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-3">
                <div 
                  className="flex-center mr-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    borderRadius: '10px',
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: 'white' }} />
                </div>
                <h3 style={{ margin: '0' }}>{item.title}</h3>
              </div>
              <p style={{ margin: '0', fontSize: '0.875rem' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Timeline */}
      <h3 className="text-center mb-6">My Journey</h3>
      <div className="grid" style={{ gap: '20px' }}>
        {timeline.map((item, index) => (
          <div key={index} className="card">
            <div className="flex items-center mb-4">
              <div 
                className="flex-center mr-4"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '50%',
                }}
              >
                <item.icon className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <div>
                <div 
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginBottom: '8px',
                  }}
                >
                  {item.year}
                </div>
                <h3 style={{ margin: '0' }}>{item.title}</h3>
              </div>
            </div>
            <p style={{ margin: '0' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
