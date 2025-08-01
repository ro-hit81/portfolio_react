"use client"

import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import { MapPin, Award, Book, School, Trophy, Laptop } from 'lucide-react'
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    L: any;
  }
}

const WorldMapJourney = () => {
  const [selectedEvent, setSelectedEvent] = useState<JourneyEvent | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [leafletLoaded, setLeafletLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [airplanePosition, setAirplanePosition] = useState<{lat: number, lng: number} | null>(null)
  const [visitedPlaces, setVisitedPlaces] = useState<JourneyEvent[]>([])
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [traveledPlaces, setTraveledPlaces] = useState<JourneyEvent[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [manIconMarker, setManIconMarker] = useState<any>(null)
  
  const mapRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const polylinesRef = useRef<any[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const airplaneMarkerRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const restartButtonRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animationRef = useRef<any>(null)

  // Journey data with geographical locations (sorted chronologically)
  const journeyEvents: JourneyEvent[] = useMemo(() => [
    {
      id: '1',
      lat: 28.2096, lng: 83.9856, // Pokhara, Nepal
      color: '#ff9800',
      icon: 'school',
      at: '2015 - 2019',
      title: 'Bachelor in Geomatics Engineering',
      description: 'Completed bachelor\'s degree in Geomatics Engineering in Nepal.',
      category: 'education',
      size: 1.2
    },
    {
      id: '2',
      lat: 13.7367, lng: 100.5231, // Bangkok, Thailand (AIT)
      color: '#9c27b0',
      icon: 'work',
      at: 'October 2019',
      title: 'AIT Thailand Internship',
      description: '3-month internship at Asian Institute of Technology, GeoInformatics Center, Thailand.',
      category: 'work',
      size: 1.1
    },
    {
      id: '3',
      lat: 35.4438, lng: 139.6380, // Yokohama, Japan (GLODAL)
      color: '#ff5722',
      icon: 'work',
      at: '2020 - 2023',
      title: 'GLODAL Japan',
      description: 'Worked for Japanese company GLODAL at Sakuragicho, Naka-ku, Yokohama. Focused on satellite-based land-use mapping and deep learning models.',
      category: 'work',
      size: 1.4
    },
    {
      id: '4',
      lat: 47.6588, lng: -2.7574, // Vannes, France
      color: '#2196f3',
      icon: 'school',
      at: 'August 2023',
      title: 'Dual Master Degree - France',
      description: 'Started dual master degree program at Université Bretagne Sud in Vannes, France.',
      category: 'education',
      size: 1.3
    },
    {
      id: '5',
      lat: 47.8095, lng: 13.0550, // Salzburg, Austria
      color: '#4caf50',
      icon: 'school',
      at: 'September 2023',
      title: 'University of Salzburg',
      description: 'Continued master studies at University of Salzburg, Austria as part of dual degree program.',
      category: 'education',
      size: 1.2
    },
    {
      id: '6',
      lat: 49.5938, lng: 17.2509, // Olomouc, Czech Republic
      color: '#673ab7',
      icon: 'school',
      at: 'February 2024',
      title: 'Palacký University Olomouc',
      description: 'Studied at Palacký University Olomouc, Czech Republic as part of European master program.',
      category: 'education',
      size: 1.1
    },
    {
      id: '7',
      lat: 45.6579, lng: 25.6012, // Brasov, Romania (AI4AGRI program)
      color: '#ff9800',
      icon: 'certificate',
      at: 'May 2024',
      title: 'AI4AGRI Program - Romania',
      description: 'Participated in AI4AGRI program in Brasov, Romania focusing on artificial intelligence applications in agriculture.',
      category: 'training',
      size: 1.0
    },
    {
      id: '8',
      lat: 46.5196, lng: 6.6323, // Lausanne, Switzerland
      color: '#009688',
      icon: 'school',
      at: 'July 8, 2024',
      title: 'University of Lausanne',
      description: 'Continued studies at University of Lausanne, Switzerland.',
      category: 'education',
      size: 1.1
    },
    {
      id: '9',
      lat: -12.2744, lng: -45.6066, // São José dos Campos, Brazil (INPE location)
      color: '#f44336',
      icon: 'work',
      at: 'August 2024',
      title: 'INPE Brazil Internship',
      description: 'Internship at National Institute for Space Research (INPE) in Brazil, working on satellite data analysis and remote sensing applications.',
      category: 'work',
      size: 1.3
    },
    {
      id: '10',
      lat: 47.6588, lng: -2.7574, // Vannes, France (Université Bretagne Sud)
      color: '#2196f3',
      icon: 'school',
      at: 'September 2024',
      title: 'Return to Université Bretagne Sud',
      description: 'Returned to Université Bretagne Sud in Vannes, France to continue master studies.',
      category: 'education',
      size: 1.2
    }
  ], [])

  // Load Leaflet dynamically
  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window === 'undefined') return
      
      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = () => {
          setLeafletLoaded(true)
        }
        document.head.appendChild(script)
      } else {
        setLeafletLoaded(true)
      }
    }

    loadLeaflet()
  }, [])

  // Initialize map
  useEffect(() => {
    if (!leafletLoaded || !mapRef.current || mapInstanceRef.current) return

    // Fix Leaflet's default icon path issue
    delete window.L.Icon.Default.prototype._getIconUrl
    window.L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    })

    const map = window.L.map(mapRef.current, {
      center: [28.2096, 83.9856], // Start at Nepal (Pokhara)
      zoom: 4,
      minZoom: 2,
      maxZoom: 12,
      zoomControl: true,
      scrollWheelZoom: false, // Disable scroll for cinematic experience
      dragging: false, // Disable dragging for controlled animation
      doubleClickZoom: false
    })

    // Add tile layer - light colored map
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map)

    mapInstanceRef.current = map

    // Add initial airplane at the starting position (Nepal)
    const initialAirplaneIcon = window.L.divIcon({
      html: getAirplaneIcon(0),
      className: '',
      iconSize: [60, 60],
      iconAnchor: [30, 30],
      popupAnchor: [0, -30]
    })
    
    airplaneMarkerRef.current = window.L.marker([28.2096, 83.9856], { 
      icon: initialAirplaneIcon,
      zIndexOffset: 1000,
      interactive: false
    }).addTo(map)

    // Start animation after map is ready with better initialization
    setTimeout(() => {
      console.log('Starting initial animation phase')
      setAnimationPhase(1)
    }, 1500) // Increased delay to ensure map is fully loaded

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [leafletLoaded])

  // Get icon component based on string
  const getIconHtml = (iconName: string, color: string) => {
    const iconSvgs: { [key: string]: string } = {
      book: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
      work: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
      trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-.78c-.55 0-1.02.26-1.32.68-.36.51-.9.82-1.5.82h-8.8c-.6 0-1.14-.31-1.5-.82-.3-.42-.77-.68-1.32-.68H3c-.55 0-1-.45-1-1s.45-1 1-1h4z"/></svg>',
      laptop: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>',
      certificate: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
      school: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>',
      award: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
    }
    
    return `<div style="width: 30px; height: 30px; background: ${color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
      <div style="width: 18px; height: 18px; color: white;">${iconSvgs[iconName] || iconSvgs.work}</div>
    </div>`
  }

  // Create airplane icon for travel animation
  const getAirplaneIcon = (rotation: number = 0) => {
    return `<div style="
      width: 60px; 
      height: 60px; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      transform: rotate(${rotation}deg); 
      position: relative;
      pointer-events: none;
    ">
      <svg viewBox="0 0 24 24" style="
        width: 50px; 
        height: 50px; 
        color: #1976d2; 
        filter: drop-shadow(0 4px 8px rgba(0,0,0,0.8));
      ">
        <path fill="currentColor" d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"/>
      </svg>
    </div>`
  }

  // Create man icon for final destination
  const getManIcon = () => {
    return `<div style="font-size: 40px; line-height: 1;">🧍‍♂️</div>`
  }

  // Color mapping for categories
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // Animate airplane between two points with dynamic trail and camera following
  const animateAirplane = useCallback((fromEvent: JourneyEvent, toEvent: JourneyEvent, duration: number = 4000) => {
    if (!mapInstanceRef.current) return Promise.resolve()

    return new Promise<void>((resolve) => {
      const map = mapInstanceRef.current
      const startTime = Date.now()
      
      // Calculate great circle path points for curved trajectory
      const createCurvedPath = (start: {lat: number, lng: number}, end: {lat: number, lng: number}, numPoints: number = 20) => {
        const points = []
        
        // Convert to radians
        const lat1 = start.lat * Math.PI / 180
        const lng1 = start.lng * Math.PI / 180
        const lat2 = end.lat * Math.PI / 180
        const lng2 = end.lng * Math.PI / 180
        
        // Calculate distance and bearing for great circle
        const dLng = lng2 - lng1
        const distance = Math.acos(
          Math.sin(lat1) * Math.sin(lat2) + 
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLng)
        )
        
        for (let i = 0; i <= numPoints; i++) {
          const f = i / numPoints
          
          // Interpolate along great circle
          const a = Math.sin((1 - f) * distance) / Math.sin(distance)
          const b = Math.sin(f * distance) / Math.sin(distance)
          
          const x = a * Math.cos(lat1) * Math.cos(lng1) + b * Math.cos(lat2) * Math.cos(lng2)
          const y = a * Math.cos(lat1) * Math.sin(lng1) + b * Math.cos(lat2) * Math.sin(lng2)
          const z = a * Math.sin(lat1) + b * Math.sin(lat2)
          
          const lat = Math.atan2(z, Math.sqrt(x * x + y * y)) * 180 / Math.PI
          const lng = Math.atan2(y, x) * 180 / Math.PI
          
          points.push({ lat, lng })
        }
        
        return points
      }
      
      // Generate curved path points
      const curvedPath = createCurvedPath(fromEvent, toEvent)
      
      // Update airplane rotation without removing it if it already exists
      if (!airplaneMarkerRef.current) {
        const initialRotation = Math.atan2(toEvent.lng - fromEvent.lng, toEvent.lat - fromEvent.lat) * (180 / Math.PI)
        const airplaneIcon = window.L.divIcon({
          html: getAirplaneIcon(initialRotation),
          className: '',
          iconSize: [60, 60],
          iconAnchor: [30, 30],
          popupAnchor: [0, -30]
        })
        
        airplaneMarkerRef.current = window.L.marker([fromEvent.lat, fromEvent.lng], { 
          icon: airplaneIcon,
          zIndexOffset: 1000,
          interactive: false
        }).addTo(map)
      }

      // Create dynamic trail line that follows the airplane
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let dynamicTrailLine: any = null

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Smooth easing function
        const easeInOutCubic = (t: number) => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }
        
        const easedProgress = easeInOutCubic(progress)
        
        // Get current position along the curved path
        const pathIndex = easedProgress * (curvedPath.length - 1)
        const currentIndex = Math.floor(pathIndex)
        const nextIndex = Math.min(currentIndex + 1, curvedPath.length - 1)
        const localProgress = pathIndex - currentIndex
        
        // Interpolate between current and next point on curved path
        const currentPoint = curvedPath[currentIndex]
        const nextPoint = curvedPath[nextIndex]
        
        const lat = currentPoint.lat + (nextPoint.lat - currentPoint.lat) * localProgress
        const lng = currentPoint.lng + (nextPoint.lng - currentPoint.lng) * localProgress
        
        // Calculate real-time rotation based on direction along curved path
        if (progress > 0.01 && nextIndex > currentIndex) {
          const deltaLat = nextPoint.lat - currentPoint.lat
          const deltaLng = nextPoint.lng - currentPoint.lng
          const currentRotation = Math.atan2(deltaLng, deltaLat) * (180 / Math.PI)
          
          // Update airplane with new position and rotation
          if (airplaneMarkerRef.current) {
            const updatedIcon = window.L.divIcon({
              html: getAirplaneIcon(currentRotation),
              className: '',
              iconSize: [60, 60],
              iconAnchor: [30, 30],
              popupAnchor: [0, -30]
            })
            airplaneMarkerRef.current.setIcon(updatedIcon)
            airplaneMarkerRef.current.setLatLng([lat, lng])
            setAirplanePosition({ lat, lng })
          }
        } else {
          // For the very beginning, just update position
          if (airplaneMarkerRef.current) {
            airplaneMarkerRef.current.setLatLng([lat, lng])
            setAirplanePosition({ lat, lng })
          }
        }
        
        // Smooth camera following without zoom changes - maintain consistent zoom level
        map.setView([lat, lng], 6, { animate: true, duration: 0.1 })
        
        // Update dynamic trail line that follows the airplane
        if (dynamicTrailLine) {
          map.removeLayer(dynamicTrailLine)
        }
        
        // Create curved trail from start to current position
        if (progress > 0.05) { // Start showing trail after 5% progress
          const currentPathIndex = Math.floor(easedProgress * (curvedPath.length - 1))
          const trailPoints = curvedPath.slice(0, currentPathIndex + 1)
          
          // Add current interpolated position as the last point
          if (trailPoints.length > 0) {
            trailPoints.push({ lat, lng })
          }
          
          if (trailPoints.length > 1) {
            const trailCoords = trailPoints.map(point => [point.lat, point.lng])
            dynamicTrailLine = window.L.polyline(trailCoords, {
              color: '#667eea',
              weight: 4,
              opacity: 0.7,
              dashArray: '10, 15',
              lineCap: 'round',
              lineJoin: 'round'
            }).addTo(map)
            polylinesRef.current.push(dynamicTrailLine)
          }
        }
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          // Keep the dynamic trail visible (don't remove it) so it can be styled later
          resolve()
        }
      }
      
      animate()
    })
  }, [])

  // Add restart button to the map
  const addRestartButton = useCallback(() => {
    if (!mapInstanceRef.current || restartButtonRef.current) return
    
    const restartButton = window.L.control({ position: 'topright' })
    restartButton.onAdd = function() {
      const div = window.L.DomUtil.create('div', 'restart-button')
      div.innerHTML = `
        <button style="
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          color: white;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
        " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          ↻
        </button>
      `
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      div.onclick = (e: any) => {
        e.stopPropagation()
        restartAnimation()
      }
      
      return div
    }
    
    restartButton.addTo(mapInstanceRef.current)
    restartButtonRef.current = restartButton
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // restartAnimation will be bound in the onclick closure

  // Smooth camera movement to focus on current location
  const panAndZoomToLocation = useCallback((event: JourneyEvent, zoom: number = 6) => {
    if (!mapInstanceRef.current) return Promise.resolve()
    
    return new Promise<void>((resolve) => {
      const map = mapInstanceRef.current
      
      map.flyTo([event.lat, event.lng], zoom, {
        duration: 1.5,
        easeLinearity: 0.5
      })
      
      setTimeout(resolve, 1500)
    })
  }, [])

  // Main animation sequence with debugging
  useEffect(() => {
    if (!mapInstanceRef.current || animationPhase === 0 || isAnimating || animationCompleted) return

    console.log(`Starting animation for phase ${animationPhase}`)

    const runAnimation = async () => {
      if (animationPhase > journeyEvents.length) {
        console.log('Animation completed - all events processed')
        return
      }
      
      setIsAnimating(true)
      const map = mapInstanceRef.current
      const currentEvent = journeyEvents[animationPhase - 1]
      const previousEvent = animationPhase > 1 ? journeyEvents[animationPhase - 2] : null

      console.log(`Processing event: ${currentEvent.title}`)

      try {
        // If this is not the first event, animate airplane travel with camera following
        if (previousEvent && (previousEvent.lat !== currentEvent.lat || previousEvent.lng !== currentEvent.lng)) {
          // Convert previous blue trail to light gray dashed immediately when starting new journey
          const lastPolylineIndex = polylinesRef.current.length - 1
          if (lastPolylineIndex >= 0) {
            const lastPolyline = polylinesRef.current[lastPolylineIndex]
            if (lastPolyline && map.hasLayer(lastPolyline)) {
              // Change the style of the existing line instead of removing it
              lastPolyline.setStyle({
                color: '#888888',
                weight: 2,
                opacity: 0.4,
                dashArray: '8, 8'
              })
            }
          }

          // Animate airplane travel with camera following simultaneously (4 seconds)
          await animateAirplane(previousEvent, currentEvent, 4000)
          
          // Brief pause at destination
          await new Promise(resolve => setTimeout(resolve, 500))
        } else {
          // For the first event, just pan to location
          await panAndZoomToLocation(currentEvent, 6)
        }

        // Add the location marker with animation
        const customIcon = window.L.divIcon({
          html: getIconHtml(currentEvent.icon, currentEvent.color),
          className: 'custom-div-icon marker-appear',
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        })

        const marker = window.L.marker([currentEvent.lat, currentEvent.lng], { icon: customIcon })
          .addTo(map)

        marker.on('click', () => setSelectedEvent(currentEvent))
        markersRef.current.push(marker)

        // Set current event and add to traveled places
        setSelectedEvent(currentEvent)
        setTraveledPlaces(prev => {
          if (!prev.find(place => place.id === currentEvent.id)) {
            return [...prev, currentEvent]
          }
          return prev
        })

        // Wait a moment at destination but keep airplane visible
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Only hide airplane and add man icon after the very last destination
        if (animationPhase === journeyEvents.length) {
          if (airplaneMarkerRef.current && mapInstanceRef.current) {
            mapInstanceRef.current.removeLayer(airplaneMarkerRef.current)
            airplaneMarkerRef.current = null
          }
          
          // Add man icon at final destination
          const manIcon = window.L.divIcon({
            html: getManIcon(),
            className: '',
            iconSize: [60, 60],
            iconAnchor: [30, 30],
            popupAnchor: [0, -30]
          })
          
          const manMarker = window.L.marker([currentEvent.lat, currentEvent.lng], { 
            icon: manIcon,
            zIndexOffset: 1000,
            interactive: false
          }).addTo(mapInstanceRef.current)
          
          setManIconMarker(manMarker)
          setAnimationCompleted(true)
          
          // Add restart button to the map
          addRestartButton()
        }

        // Wait before next event
        await new Promise(resolve => setTimeout(resolve, 1000))

      } catch (error) {
        console.error('Animation error:', error)
      } finally {
        console.log(`Finished processing phase ${animationPhase}, setting isAnimating to false`)
        setIsAnimating(false)
      }
    }

    runAnimation()
  }, [animationPhase, animationCompleted, addRestartButton, animateAirplane, journeyEvents, panAndZoomToLocation]) // Removed isAnimating dependency

  // Progress the animation with better error handling
  useEffect(() => {
    // Only progress if we're not currently animating and haven't completed
    if (isAnimating || animationPhase === 0 || animationCompleted) {
      console.log(`Skipping progression: isAnimating=${isAnimating}, phase=${animationPhase}, completed=${animationCompleted}`)
      return
    }

    console.log(`Animation phase: ${animationPhase}, Total events: ${journeyEvents.length}`)

    // If we've reached the end, mark as completed
    if (animationPhase >= journeyEvents.length) {
      console.log('Animation completed - marking as finished')
      setAnimationCompleted(true)
      return
    }

    const timer = setTimeout(() => {
      setAnimationPhase(prev => {
        const nextPhase = prev + 1
        console.log(`Moving from phase ${prev} to ${nextPhase}`)
        return nextPhase
      })
    }, 500) // Increased delay to ensure previous animation completes

    return () => clearTimeout(timer)
  }, [animationPhase, isAnimating, animationCompleted, journeyEvents.length])

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEventClick = useCallback((event: JourneyEvent) => {
    setSelectedEvent(event)
  }, [])

  // Helper function to get icon component for the traveled places list
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      school: <School size={16} />,
      work: <MapPin size={16} />,
      certificate: <Award size={16} />,
      book: <Book size={16} />,
      trophy: <Trophy size={16} />,
      laptop: <Laptop size={16} />,
      award: <Award size={16} />
    }
    return iconMap[iconName] || <MapPin size={16} />
  }

  const restartAnimation = useCallback(() => {
    // Clear all markers and lines
    markersRef.current.forEach(marker => mapInstanceRef.current?.removeLayer(marker))
    polylinesRef.current.forEach(polyline => mapInstanceRef.current?.removeLayer(polyline))
    markersRef.current = []
    polylinesRef.current = []
    
    // Remove airplane
    if (airplaneMarkerRef.current && mapInstanceRef.current) {
      mapInstanceRef.current.removeLayer(airplaneMarkerRef.current)
      airplaneMarkerRef.current = null
    }
    
    // Remove man icon
    if (manIconMarker && mapInstanceRef.current) {
      mapInstanceRef.current.removeLayer(manIconMarker)
      setManIconMarker(null)
    }
    
    // Remove restart button
    if (restartButtonRef.current && mapInstanceRef.current) {
      mapInstanceRef.current.removeControl(restartButtonRef.current)
      restartButtonRef.current = null
    }
    
    // Reset animation states
    setAnimationPhase(0)
    setSelectedEvent(null)
    setTraveledPlaces([])
    setIsAnimating(false)
    setAnimationCompleted(false)
    
    // Reset map view to starting position (Nepal)
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([28.2096, 83.9856], 4)
      
      // Add initial airplane back at the starting position
      const initialAirplaneIcon = window.L.divIcon({
        html: getAirplaneIcon(0),
        className: '',
        iconSize: [60, 60],
        iconAnchor: [30, 30],
        popupAnchor: [0, -30]
      })
      
      airplaneMarkerRef.current = window.L.marker([28.2096, 83.9856], { 
        icon: initialAirplaneIcon,
        zIndexOffset: 1000,
        interactive: false
      }).addTo(mapInstanceRef.current)
    }
    
    // Restart animation
    setTimeout(() => setAnimationPhase(1), 1000)
  }, [manIconMarker])

  return (
    <div className={styles.mapContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>My International Journey</h2>
        <p className={styles.subtitle}>
          Follow my educational and professional path across the globe, from Nepal to Europe and beyond.
        </p>
      </div>

      <div className={styles.mapWrapper}>
        {/* Three-column layout: Places Traveled | Map Card | Current Destination */}
        <div className={styles.mainLayout}>
          {/* Traveled Places Card */}
          <div className={styles.traveledCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Places Traveled</h3>
              <div className={styles.travelCount}>
                {traveledPlaces.length} / {journeyEvents.length}
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.placesList}>
                {traveledPlaces.map((place, index) => (
                  <div 
                    key={place.id}
                    className={`${styles.placeItem} ${selectedEvent?.id === place.id ? styles.activePlaceItem : ''}`}
                    onClick={() => setSelectedEvent(place)}
                    style={{ borderLeftColor: place.color }}
                  >
                    <div className={styles.placeNumber}>{index + 1}</div>
                    <div className={styles.placeInfo}>
                      <div className={styles.placeTitle}>{place.title}</div>
                      <div className={styles.placeDate}>{place.at}</div>
                    </div>
                    <div className={styles.placeIcon} style={{ background: place.color }}>
                      {getIconComponent(place.icon)}
                    </div>
                  </div>
                ))}
                {traveledPlaces.length === 0 && (
                  <div className={styles.noPlaces}>
                    Journey will begin shortly...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map Card in the middle */}
          <div className={styles.mapCard}>
            <div className={styles.mapCardContent}>
              <div 
                ref={mapRef} 
                className={styles.leafletMap}
                style={{ 
                  height: '100%', 
                  width: '100%', 
                  borderRadius: '0', 
                  overflow: 'hidden'
                }}
              />
            </div>
          </div>

          {/* Current Destination Card */}
          <div className={styles.currentCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Current Destination</h3>
            </div>
            <div className={styles.cardContent}>
              {selectedEvent ? (
                <>
                  <div className={styles.destinationTitle} style={{ color: selectedEvent.color }}>
                    {selectedEvent.title}
                  </div>
                  <div className={styles.destinationDate}>
                    {selectedEvent.at}
                  </div>
                  <div className={styles.destinationDescription}>
                    {selectedEvent.description}
                  </div>
                  <div className={styles.categoryBadge} style={{ backgroundColor: selectedEvent.color + '20', color: selectedEvent.color }}>
                    {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)}
                  </div>
                </>
              ) : (
                <div className={styles.noSelection}>
                  Select a destination on the map to view details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorldMapJourney
