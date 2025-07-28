"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Brain, 
  Satellite, 
  Database, 
  Globe, 
  Cpu, 
  Cloud, 
  BarChart3, 
  Camera, 
  Map,
  Zap,
  Target
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Earth Observation',
      icon: Satellite,
      color: 'from-blue-500 to-cyan-500',
      description: 'Satellite imagery analysis and remote sensing expertise',
      skills: [
        { name: 'Sentinel-2 Analysis', level: 95, icon: Camera },
        { name: 'Landsat Processing', level: 90, icon: Satellite },
        { name: 'SAR Data Analysis', level: 85, icon: Zap },
        { name: 'Spectral Analysis', level: 92, icon: BarChart3 },
        { name: 'Change Detection', level: 88, icon: Target },
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Advanced AI and deep learning for geospatial applications',
      skills: [
        { name: 'Computer Vision', level: 93, icon: Brain },
        { name: 'Deep Learning', level: 90, icon: Cpu },
        { name: 'TensorFlow/PyTorch', level: 88, icon: Code },
        { name: 'Object Detection', level: 85, icon: Target },
        { name: 'Image Classification', level: 92, icon: Camera },
      ]
    },
    {
      title: 'Geospatial Analysis',
      icon: Map,
      color: 'from-emerald-500 to-teal-500',
      description: 'Advanced GIS and spatial data processing',
      skills: [
        { name: 'QGIS/ArcGIS', level: 90, icon: Map },
        { name: 'PostGIS/Spatial SQL', level: 85, icon: Database },
        { name: 'Spatial Statistics', level: 88, icon: BarChart3 },
        { name: 'Geodatabase Design', level: 82, icon: Database },
        { name: 'Web Mapping', level: 87, icon: Globe },
      ]
    },
    {
      title: 'Software Development',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      description: 'Full-stack development and cloud solutions',
      skills: [
        { name: 'Python/R', level: 95, icon: Code },
        { name: 'JavaScript/TypeScript', level: 88, icon: Code },
        { name: 'AWS/Google Earth Engine', level: 85, icon: Cloud },
        { name: 'Docker/Kubernetes', level: 80, icon: Cloud },
        { name: 'API Development', level: 90, icon: Globe },
      ]
    }
  ]

  const tools = [
    { name: 'Python', icon: '🐍', proficiency: 95 },
    { name: 'GDAL/OGR', icon: '🗺️', proficiency: 90 },
    { name: 'TensorFlow', icon: '🧠', proficiency: 88 },
    { name: 'Google Earth Engine', icon: '🌍', proficiency: 92 },
    { name: 'QGIS', icon: '📍', proficiency: 90 },
    { name: 'AWS', icon: '☁️', proficiency: 85 },
    { name: 'PostGIS', icon: '🗄️', proficiency: 87 },
    { name: 'Docker', icon: '🐳', proficiency: 82 },
    { name: 'R', icon: '📊', proficiency: 85 },
    { name: 'PyTorch', icon: '🔥', proficiency: 83 },
    { name: 'OpenCV', icon: '👁️', proficiency: 88 },
    { name: 'Jupyter', icon: '📓', proficiency: 95 },
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 glow">
            <Cpu className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-slate-600">Technical Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the entire Earth Observation and AI pipeline, 
            from satellite data acquisition to advanced machine learning deployment.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl glow group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color}/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
                  <p className="text-slate-600 text-sm">{category.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.6 }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-4 h-4 text-slate-600 group-hover/skill:text-blue-600 transition-colors duration-300" />
                        <span className="font-medium text-slate-700">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-3xl glow"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Tools & Technologies</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Proficient in industry-leading tools and technologies for Earth Observation and AI development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="glass-card p-6 rounded-2xl mb-3 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">{tool.name}</h4>
                  <div className="w-full bg-white/50 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">{tool.proficiency}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
