import React from 'react'
import { ExternalLink, Github, Satellite, Brain, Database, Globe, Lock } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'ML4EARTH: Prithvi4QR Foundation Models',
      description: '🏆 Winner of ML4Earth Hackathon 2024. Foundation model for emergency response using NASA-IBM Prithvi-ViT-100 for land cover classification with 90.43% accuracy.',
      technologies: ['PyTorch Lightning', 'Prithvi-ViT-100', 'TeraTorch', 'Earth Observation'],
      icon: Satellite,
      github: 'https://github.com/ro-hit81/ML4EARTH',
      demo: 'https://ml4earth24.devpost.com/',
    },
    {
      title: 'Landcover GEE Classification',
      description: 'Advanced land cover classification system using Google Earth Engine for multi-temporal satellite imagery analysis and environmental monitoring.',
      technologies: ['Google Earth Engine', 'JavaScript', 'Sentinel-2', 'Machine Learning'],
      icon: Globe,
      github: 'https://github.com/ro-hit81/Landcover_GEE',
      demo: '#',
    },
    {
      title: 'U-Net Landsat 10-Class Segmentation',
      description: 'Deep learning semantic segmentation model using U-Net architecture for 10-class land cover classification from Landsat satellite imagery.',
      technologies: ['TensorFlow', 'U-Net', 'Landsat', 'Semantic Segmentation'],
      icon: Brain,
      github: 'https://github.com/ro-hit81/unet_landsat_10_class',
      demo: '#',
    },
    {
      title: 'Automatic Satellite Image Downloader',
      description: 'Automated tool for downloading Landsat satellite imagery using Google Earth Engine API with support for all Landsat missions and batch processing.',
      technologies: ['Python', 'Google Earth Engine', 'Jupyter', 'Landsat'],
      icon: Database,
      github: 'https://github.com/ro-hit81/Automatic-Satellite-Image-Downloader',
      demo: 'https://colab.research.google.com/github/ro-hit81/Automatic-Satellite-Image-Downloader/blob/master/LandsatDownloader.ipynb',
    },
    {
      title: 'Proportion Approach for Deep Learning',
      description: 'Novel approach for improving deep learning model performance through proportional data analysis and advanced training strategies.',
      technologies: ['Python', 'Deep Learning', 'Data Analysis', 'Model Optimization'],
      icon: Brain,
      github: 'https://github.com/ro-hit81/Proportion-Approach',
      demo: '#',
      private: true,
    },
  ]

  return (
    <section className="container">
      <h2 className="gradient-text mb-8">Featured Projects</h2>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        Showcasing innovative solutions that bridge Earth Observation and Artificial Intelligence 
        to solve real-world challenges and create positive impact.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h3 style={{ margin: '0', flex: 1 }}>{project.title}</h3>
              {project.private && (
                <div title="Private Repository">
                  <Lock className="w-4 h-4 text-gray-500" />
                </div>
              )}
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
                {project.private ? 'Private' : 'Code'}
              </a>
              {project.demo !== '#' && (
                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.875rem' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {project.title.includes('ML4EARTH') ? 'Competition' : project.demo.includes('colab') ? 'Colab' : 'Demo'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
