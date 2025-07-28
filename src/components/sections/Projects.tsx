import React from 'react'
import { ExternalLink, Github, Satellite, Brain, Database, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Climate Change Monitoring System',
      description: 'AI-powered platform for analyzing satellite imagery to track deforestation and climate change indicators across global regions.',
      technologies: ['Python', 'TensorFlow', 'Sentinel-2', 'GEE'],
      icon: Satellite,
      github: 'https://github.com/ro-hit81',
      demo: '#',
    },
    {
      title: 'Agricultural Crop Classification',
      description: 'Deep learning model for automated crop type classification using multi-temporal satellite imagery with 95% accuracy.',
      technologies: ['PyTorch', 'Landsat', 'Computer Vision', 'GIS'],
      icon: Brain,
      github: 'https://github.com/ro-hit81',
      demo: '#',
    },
    {
      title: 'Earth Observation Data Pipeline',
      description: 'Scalable cloud-based pipeline for processing and analyzing large-scale satellite imagery data in real-time.',
      technologies: ['AWS', 'Docker', 'Apache Spark', 'PostgreSQL'],
      icon: Database,
      github: 'https://github.com/ro-hit81',
      demo: '#',
    },
    {
      title: 'Disaster Response Platform',
      description: 'Emergency response system using satellite imagery and AI to assess damage and coordinate relief efforts during natural disasters.',
      technologies: ['React', 'Node.js', 'Machine Learning', 'APIs'],
      icon: Globe,
      github: 'https://github.com/ro-hit81',
      demo: '#',
    },
  ]

  return (
    <section className="container">
      <h2 className="gradient-text mb-8">Featured Projects</h2>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        Showcasing innovative solutions that bridge Earth Observation and Artificial Intelligence 
        to solve real-world challenges and create positive impact.
      </p>
      
      <div className="grid grid-2">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="flex items-center mb-4">
              <div 
                className="flex-center mr-4"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '12px',
                }}
              >
                <project.icon className="w-6 h-6" style={{ color: 'white' }} />
              </div>
              <h3 style={{ margin: '0' }}>{project.title}</h3>
            </div>
            
            <p className="mb-4">{project.description}</p>
            
            <div className="mb-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex" style={{ gap: '12px' }}>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.875rem' }}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
              <a 
                href={project.demo} 
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.875rem' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
