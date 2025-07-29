"use client"

import React, { useEffect, useState, useCallback, useRef } from 'react'
import { MapPin, Award, Book, School, Trophy, Laptop, FileText, Plane } from 'lucide-react'
import styles from './WorldMapJourney.module.css'

interface JourneyEvent {
  id: string
  lat: number
  lng: number
  color: string
  icon: string
  at: string
  title: string
  description: string
  category: 'education' | 'work' | 'achievement' | 'training' | 'project'
  size: number
}

// Define Leaflet types
declare global {
  interface Window {
    L: any;
  }
}

const WorldMapJourney = () => {
  const [selectedEvent, setSelectedEvent] = useState<JourneyEvent | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [leafletLoaded, setLeafletLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const polylinesRef = useRef<any[]>([])
  const airplaneMarkerRef = useRef<any>(null)

  // Journey data with geographical locations (sorted chronologically)
  const journeyEvents: JourneyEvent[] = [
    {
      id: '4',
      lat: 27.7172, lng: 85.3240, // Kathmandu, Nepal
      color: '#8bc34a',
      icon: 'award',
      at: 'July 2015',
      title: 'Engineering Entrance',
      description: 'Entrance exam conducted by IOE for engineering. Geomatics Department Entrance Topper',
      category: 'achievement',
      size: 1.0
    },
    {
      id: '5',
      lat: 28.2096, lng: 83.9856, // Pokhara, Nepal
      color: '#ff9800',
      icon: 'school',
      at: 'November, 2015',
      title: 'Pashchimanchal Campus',
      description: 'Started bachelors education in Geomatics Engineering.',
      category: 'education',
      size: 1.1
    },
    {
      id: '6',
      lat: 28.2096, lng: 83.9856, // Pokhara, Nepal
      color: '#e91e63',
      icon: 'award',
      at: 'January, 2016',
      title: 'Honored as a topper in Geomatics Engineering',
      description: 'Honored as a topper in Geomatics Engineering',
      category: 'achievement',
      size: 1.2
    },
    {
      id: '12',
      lat: 13.7367, lng: 100.5231, // Bangkok, Thailand
      color: '#9c27b0',
      icon: 'work',
      at: 'October, 2019',
      title: 'Started Internship at GeoInformatics Center',
      description: 'As soon as attending Final exams of bachelors, Joined Internship at GeoInformatics Center, Asian Institute of Technology, Thailand.',
      category: 'work',
      size: 1.1
    },
    {
      id: '13',
      lat: 13.7367, lng: 100.5231, // Bangkok, Thailand
      color: '#795548',
      icon: 'book',
      at: '5 December, 2019',
      title: 'Published first Paper on ISPRS Archive',
      description: 'E-CAD: WEB-BASED INFORMATION SERVICE FOR LAND MANAGEMENT paper published in International Society for Photogrammetry & Remote Sensing.',
      category: 'achievement',
      size: 1.3
    },
    {
      id: '14',
      lat: 28.2096, lng: 83.9856, // Pokhara, Nepal (Pashchimanchal Campus)
      color: '#ff5722',
      icon: 'school',
      at: 'December, 2019',
      title: 'Bachelor in Geomatics Engineering',
      description: 'Graduated in Geomatics Engineering from Pashchimanchal Campus, Institute of Engineering, Tribhuvan University.',
      category: 'education',
      size: 1.5
    },
    {
      id: '17',
      lat: 27.7172, lng: 85.3240, // Kathmandu, Nepal
      color: '#3f51b5',
      icon: 'laptop',
      at: 'June, 2020',
      title: 'COVID-19 Stats Web App',
      description: 'Deployed COVID-19 Web App for Nepali community to see all the stats relating to pandemic.',
      category: 'project',
      size: 0.9
    },
    {
      id: '18',
      lat: 27.7172, lng: 85.3240, // Kathmandu, Nepal
      color: '#9c27b0',
      icon: 'trophy',
      at: 'September, 2020',
      title: 'COVID-19 Mapathon',
      description: 'First prize in Mapathon organized by Nepal Geomatics Engineering Society. The mapathon was organized with the aim of sharing geo-informatics knowledge in multiple disciplines, most importantly the sector of disease prevention & control.',
      category: 'achievement',
      size: 1.0
    },
    {
      id: '20',
      lat: 27.7172, lng: 85.3240, // Kathmandu, Nepal
      color: '#ff9800',
      icon: 'book',
      at: 'September, 2020',
      title: 'Working on Deep Learning algorithm',
      description: 'Advanced research in deep learning algorithms for satellite imagery analysis and pattern recognition.',
      category: 'work',
      size: 0.8
    },
    {
      id: '19',
      lat: 13.7367, lng: 100.5231, // Bangkok, Thailand (GLODAL)
      color: '#ff5722',
      icon: 'work',
      at: 'October, 2020',
      title: 'Joined GLODAL',
      description: 'Working as a research assistant with major responsibilities: (1) Data processing for satellite-based land-use mapping. (2) Developing deep learning models for satellite-based land-use mapping. (3) Automation code for accessing Landsat images from Google Earth Engine',
      category: 'work',
      size: 1.2
    }
  ]

  // Convert lat/lng to screen coordinates (Mercator-like projection)
  const projectCoordinates = (lat: number, lng: number, width: number, height: number) => {
    // Simple equirectangular projection
    const x = ((lng + 180) / 360) * width
    const y = ((90 - lat) / 180) * height
    return { x, y }
  }

  // Get icon component based on string
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      book: Book,
      work: MapPin,
      trophy: Trophy,
      laptop: Laptop,
      certificate: FileText,
      school: School,
      award: Award
    }
    return iconMap[iconName] || MapPin
  }

  // Color mapping for categories
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      education: '#2196f3',
      work: '#ff5722',
      achievement: '#9c27b0',
      training: '#4caf50',
      project: '#ff9800'
    }
    return colorMap[category] || '#666'
  }

  // Create travel paths between consecutive events
  const createTravelPaths = () => {
    const paths = []
    for (let i = 1; i < journeyEvents.length; i++) {
      const from = journeyEvents[i - 1]
      const to = journeyEvents[i]
      
      // Only create path if locations are different
      if (from.lat !== to.lat || from.lng !== to.lng) {
        paths.push({
          from: projectCoordinates(from.lat, from.lng, 800, 400),
          to: projectCoordinates(to.lat, to.lng, 800, 400),
          fromEvent: from,
          toEvent: to
        })
      }
    }
    return paths
  }

  const travelPaths = createTravelPaths()

  // Animate journey points
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase(prev => {
        if (prev < journeyEvents.length) {
          return prev + 1
        }
        return prev
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [animationPhase])

  // Animate airplane along paths
  useEffect(() => {
    if (animationPhase > 1 && currentPathIndex < travelPaths.length - 1) {
      const nextPathIndex = currentPathIndex + 1
      const path = travelPaths[nextPathIndex]
      
      if (path) {
        const startTime = Date.now()
        const duration = 2000 // 2 seconds per flight
        
        const animateAirplane = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function for smooth animation
          const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          const easedProgress = easeInOut(progress)
          
          const x = path.from.x + (path.to.x - path.from.x) * easedProgress
          const y = path.from.y + (path.to.y - path.from.y) * easedProgress
          
          // Calculate angle for airplane rotation
          const angle = Math.atan2(path.to.y - path.from.y, path.to.x - path.from.x) * 180 / Math.PI
          
          setAirplanePosition({
            x,
            y,
            angle,
            visible: true
          })
          
          if (progress < 1) {
            requestAnimationFrame(animateAirplane)
          } else {
            setCurrentPathIndex(nextPathIndex)
            // Hide airplane briefly before next flight
            setTimeout(() => {
              setAirplanePosition(prev => ({ ...prev, visible: false }))
            }, 500)
          }
        }
        
        animateAirplane()
      }
    }
  }, [animationPhase, currentPathIndex, travelPaths])

  // Get visible events based on animation phase
  const visibleEvents = journeyEvents.slice(0, animationPhase).map(event => {
    const coords = projectCoordinates(event.lat, event.lng, 800, 400)
    return { ...event, x: coords.x, y: coords.y }
  })

  const handleEventClick = useCallback((event: JourneyEvent) => {
    setSelectedEvent(event)
  }, [])

  return (
    <div className={styles.mapContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Professional Journey</h2>
        <p className={styles.subtitle}>
          Follow my path from Nepal to Thailand and back - an interactive map of achievements and growth
        </p>
      </div>

      <div className={styles.mapWrapper}>
        {/* World Map SVG */}
        <div className={styles.worldMap}>
          <svg 
            viewBox="0 0 800 400" 
            className={styles.mapSvg}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Simple world boundaries - very light */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth="1"/>
              </pattern>
            </defs>
            
            {/* Background */}
            <rect width="800" height="400" fill="#f8fafc" stroke="none"/>
            <rect width="800" height="400" fill="url(#grid)"/>
            
            {/* Actual World Map - Simplified for performance */}
            <g stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="rgba(200,200,200,0.1)">
              
              {/* North America */}
              <path d="M158 110 Q180 100 200 110 Q220 115 240 120 Q250 130 245 140 Q240 150 220 155 Q200 160 180 155 Q160 150 155 140 Q150 130 158 110 Z" />
              <path d="M120 140 Q140 135 160 140 Q180 145 190 155 Q185 165 175 170 Q155 175 135 170 Q115 165 120 140 Z" />
              <path d="M100 80 Q130 75 150 85 Q170 90 175 100 Q170 110 160 115 Q140 120 120 115 Q100 110 95 100 Q90 90 100 80 Z" />
              
              {/* South America */}
              <path d="M180 180 Q200 175 215 185 Q225 195 230 210 Q235 225 230 240 Q225 255 215 265 Q205 270 195 265 Q185 260 180 245 Q175 230 175 215 Q175 200 180 180 Z" />
              
              {/* Europe */}
              <path d="M380 100 Q400 95 420 100 Q440 105 450 115 Q455 125 450 135 Q445 145 435 150 Q425 155 415 150 Q405 145 395 140 Q385 135 380 125 Q375 115 380 100 Z" />
              
              {/* Africa */}
              <path d="M380 150 Q400 145 415 155 Q430 165 435 180 Q440 195 435 210 Q430 225 425 240 Q420 255 410 265 Q400 270 390 265 Q380 260 375 245 Q370 230 370 215 Q370 200 375 185 Q375 170 380 150 Z" />
              
              {/* Asia */}
              <path d="M450 120 Q480 115 510 120 Q540 125 570 130 Q600 135 630 140 Q660 145 680 155 Q690 165 685 175 Q680 185 670 190 Q650 195 630 190 Q610 185 590 180 Q570 175 550 170 Q530 165 510 160 Q490 155 470 150 Q450 145 445 135 Q440 125 450 120 Z" />
              
              {/* India */}
              <path d="M520 160 Q540 155 555 165 Q570 175 575 190 Q580 205 575 220 Q570 235 560 245 Q550 250 540 245 Q530 240 525 225 Q520 210 520 195 Q520 180 520 160 Z" />
              
              {/* Southeast Asia */}
              <path d="M580 180 Q600 175 620 180 Q640 185 655 195 Q670 205 675 220 Q680 235 675 250 Q670 265 660 270 Q650 275 640 270 Q630 265 620 260 Q610 255 600 250 Q590 245 585 235 Q580 225 580 210 Q580 195 580 180 Z" />
              
              {/* China */}
              <path d="M550 110 Q580 105 610 110 Q640 115 665 125 Q690 135 700 150 Q705 165 700 180 Q695 195 685 205 Q675 210 665 205 Q655 200 645 195 Q635 190 625 185 Q615 180 605 175 Q595 170 585 165 Q575 160 565 155 Q555 150 550 140 Q545 130 550 110 Z" />
              
              {/* Russia */}
              <path d="M450 80 Q490 75 530 80 Q570 85 610 90 Q650 95 690 100 Q730 105 760 115 Q770 125 765 135 Q760 145 750 150 Q740 155 730 150 Q720 145 710 140 Q700 135 690 130 Q680 125 670 120 Q660 115 650 110 Q640 105 630 100 Q620 95 610 90 Q600 85 590 80 Q580 75 570 70 Q560 65 550 70 Q540 75 530 80 Q520 85 510 90 Q500 95 490 100 Q480 105 470 100 Q460 95 450 90 Q445 85 450 80 Z" />
              
              {/* Australia */}
              <path d="M620 280 Q650 275 680 285 Q710 295 725 310 Q730 325 725 340 Q720 355 710 365 Q700 370 690 365 Q680 360 670 355 Q660 350 650 345 Q640 340 630 335 Q620 330 615 320 Q610 310 615 295 Q615 285 620 280 Z" />
              
              {/* Japan */}
              <path d="M680 140 Q690 135 700 140 Q710 145 715 155 Q720 165 715 175 Q710 185 700 190 Q690 195 680 190 Q670 185 665 175 Q660 165 665 155 Q670 145 680 140 Z" />
              
              {/* UK */}
              <path d="M360 110 Q370 105 375 115 Q380 125 375 135 Q370 145 360 140 Q350 135 355 125 Q355 115 360 110 Z" />
              
              {/* Scandinavia */}
              <path d="M400 70 Q420 65 430 75 Q435 85 430 95 Q425 105 415 110 Q405 115 395 110 Q385 105 390 95 Q395 85 400 70 Z" />
              
              {/* Madagascar */}
              <path d="M460 250 Q470 245 475 255 Q480 265 475 275 Q470 285 460 280 Q450 275 455 265 Q455 255 460 250 Z" />
              
              {/* New Zealand */}
              <path d="M750 320 Q760 315 765 325 Q770 335 765 345 Q760 355 750 350 Q740 345 745 335 Q745 325 750 320 Z" />
              
              {/* Greenland */}
              <path d="M280 40 Q300 35 315 45 Q330 55 335 70 Q340 85 335 100 Q330 115 320 125 Q310 130 300 125 Q290 120 285 105 Q280 90 280 75 Q280 60 280 40 Z" />
              
              {/* Philippines */}
              <path d="M650 200 Q660 195 665 205 Q670 215 665 225 Q660 235 650 230 Q640 225 645 215 Q645 205 650 200 Z" />
              
              {/* Indonesia */}
              <path d="M600 220 Q630 215 660 225 Q690 235 700 250 Q705 265 700 280 Q695 295 685 305 Q675 310 665 305 Q655 300 645 295 Q635 290 625 285 Q615 280 610 270 Q605 260 605 245 Q605 230 600 220 Z" />
              
              {/* Sri Lanka */}
              <path d="M535 240 Q540 235 545 245 Q550 255 545 265 Q540 275 535 270 Q530 265 535 255 Q535 245 535 240 Z" />
              
            </g>
            
            {/* Highlight key countries for the journey */}
            <g stroke="rgba(103, 126, 234, 0.6)" strokeWidth="1" fill="rgba(103, 126, 234, 0.1)">
              {/* Nepal - highlighted */}
              <path d="M545 170 Q555 165 565 170 Q570 175 565 185 Q560 190 550 185 Q545 180 545 170 Z" />
              
              {/* Thailand - highlighted */}
              <path d="M580 190 Q590 185 595 195 Q600 205 595 215 Q590 220 580 215 Q575 210 575 200 Q575 190 580 190 Z" />
            </g>
            
            {/* Country labels for key locations */}
            <g fill="rgba(103, 126, 234, 0.8)" fontSize="10" fontFamily="Arial, sans-serif" textAnchor="middle">
              <text x="555" y="180" fontSize="8" fontWeight="500">Nepal</text>
              <text x="588" y="205" fontSize="8" fontWeight="500">Thailand</text>
            </g>
            
            {/* Travel paths - dotted lines */}
            {travelPaths.slice(0, Math.max(0, animationPhase - 1)).map((path, index) => (
              <line
                key={index}
                x1={path.from.x}
                y1={path.from.y}
                x2={path.to.x}
                y2={path.to.y}
                stroke="#667eea"
                strokeWidth="2"
                strokeDasharray="5,5"
                className={styles.travelPath}
                style={{ animationDelay: `${index * 1.5}s` }}
              />
            ))}
            
            {/* Journey points */}
            {visibleEvents.map((event, index) => (
              <g key={event.id}>
                <circle
                  cx={event.x}
                  cy={event.y}
                  r={8 * event.size}
                  fill={event.color}
                  stroke="white"
                  strokeWidth="2"
                  className={styles.journeyPoint}
                  style={{ animationDelay: `${index * 1}s` }}
                  onClick={() => handleEventClick(event)}
                />
                <circle
                  cx={event.x}
                  cy={event.y}
                  r={12 * event.size}
                  fill="none"
                  stroke={event.color}
                  strokeWidth="1"
                  opacity="0.3"
                  className={styles.pointRing}
                  style={{ animationDelay: `${index * 1}s` }}
                />
              </g>
            ))}
            
            {/* Animated airplane */}
            {airplanePosition.visible && (
              <g 
                transform={`translate(${airplanePosition.x}, ${airplanePosition.y}) rotate(${airplanePosition.angle})`}
                className={styles.airplane}
              >
                <circle r="12" fill="rgba(103, 126, 234, 0.2)" />
                <Plane size={16} />
              </g>
            )}
          </svg>
        </div>

        {/* Event Details Panel */}
        {selectedEvent && (
          <div className={styles.eventPanel}>
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            
            <div className={styles.eventHeader}>
              <div 
                className={styles.eventIcon}
                style={{ backgroundColor: selectedEvent.color }}
              >
                {React.createElement(getIcon(selectedEvent.icon), { size: 20, color: 'white' })}
              </div>
              <div>
                <h3 className={styles.eventTitle}>{selectedEvent.title}</h3>
                <p className={styles.eventDate}>{selectedEvent.at}</p>
              </div>
            </div>
            
            <div className={styles.eventContent}>
              <p className={styles.eventDescription}>{selectedEvent.description}</p>
              <div className={styles.eventCategory}>
                <span 
                  className={styles.categoryBadge}
                  style={{ backgroundColor: getCategoryColor(selectedEvent.category) }}
                >
                  {selectedEvent.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Timeline Progress */}
        <div className={styles.timelineProgress}>
          <div className={styles.progressInfo}>
            <span>Journey Progress: {animationPhase}/{journeyEvents.length}</span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${(animationPhase / journeyEvents.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <h4>Journey Categories</h4>
          {['education', 'work', 'achievement', 'training', 'project'].map(category => (
            <div key={category} className={styles.legendItem}>
              <div 
                className={styles.legendColor}
                style={{ backgroundColor: getCategoryColor(category) }}
              />
              <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorldMapJourney
