"use client"

import React, { useState, useEffect } from 'react'
import styles from './WorldMapJourney.module.css'

interface JourneyPoint {
  id: string
  x: number // Percentage from left
  y: number // Percentage from top
  year: string
  title: string
  location: string
  description: string
  delay: number // Animation delay in seconds
}

const WorldMapJourney = () => {
  const [activePoint, setActivePoint] = useState<string | null>(null)
  const [animatedPoints, setAnimatedPoints] = useState<Set<string>>(new Set())

  // Professional journey points on the world map
  const journeyPoints: JourneyPoint[] = [
    {
      id: 'point1',
      x: 77, // India
      y: 35,
      year: '2019-2021',
      title: 'Research Assistant',
      location: 'India',
      description: 'Started research in ML applications for Earth observation',
      delay: 1
    },
    {
      id: 'point2',
      x: 50, // Europe
      y: 25,
      year: '2021-2023',
      title: 'Remote Sensing Analyst',
      location: 'Europe',
      description: 'Specialized in satellite imagery processing and analysis',
      delay: 2.5
    },
    {
      id: 'point3',
      x: 20, // North America
      y: 30,
      year: '2023-Present',
      title: 'Senior EO & AI Specialist',
      location: 'Global Projects',
      description: 'Leading AI solutions for environmental monitoring worldwide',
      delay: 4
    }
  ]

  useEffect(() => {
    // Animate points sequentially
    journeyPoints.forEach((point) => {
      setTimeout(() => {
        setAnimatedPoints(prev => new Set([...prev, point.id]))
      }, point.delay * 1000)
    })
  }, [])

  return (
    <div className={`${styles.mapContainer} ${styles.markerAnimations}`}>
      <h3 className={styles.mapTitle}>Global Professional Journey</h3>
      
      {/* World Map SVG */}
      <div className={styles.mapWrapper}>
        <svg 
          viewBox="0 0 1000 500" 
          className={styles.worldMap}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simple world map outline - key continents */}
          
          {/* North America */}
          <path 
            d="M50 150 L200 120 L220 180 L180 220 L120 200 L80 180 Z"
            className={styles.continent}
          />
          
          {/* South America */}
          <path 
            d="M150 250 L200 240 L210 320 L180 380 L160 350 L140 300 Z"
            className={styles.continent}
          />
          
          {/* Europe */}
          <path 
            d="M450 120 L520 110 L530 160 L500 180 L470 170 Z"
            className={styles.continent}
          />
          
          {/* Africa */}
          <path 
            d="M480 200 L530 190 L540 300 L520 350 L490 340 L470 280 Z"
            className={styles.continent}
          />
          
          {/* Asia */}
          <path 
            d="M550 120 L750 100 L800 200 L780 250 L720 280 L580 200 Z"
            className={styles.continent}
          />
          
          {/* Australia */}
          <path 
            d="M700 350 L780 340 L790 380 L750 390 L720 385 Z"
            className={styles.continent}
          />

          {/* Journey connections */}
          {animatedPoints.size > 1 && (
            <>
              <defs>
                <marker 
                  id="arrowhead" 
                  markerWidth="10" 
                  markerHeight="7" 
                  refX="10" 
                  refY="3.5" 
                  orient="auto"
                >
                  <polygon 
                    points="0 0, 10 3.5, 0 7" 
                    className={styles.arrow}
                  />
                </marker>
              </defs>
              
              {/* Connection line 1 to 2 */}
              {animatedPoints.has('point2') && (
                <path
                  d="M770 175 Q600 100 500 125"
                  className={styles.connectionLine}
                  style={{ animationDelay: '2.5s' }}
                  markerEnd="url(#arrowhead)"
                />
              )}
              
              {/* Connection line 2 to 3 */}
              {animatedPoints.has('point3') && (
                <path
                  d="M500 125 Q350 80 200 150"
                  className={styles.connectionLine}
                  style={{ animationDelay: '4s' }}
                  markerEnd="url(#arrowhead)"
                />
              )}
            </>
          )}

          {/* Journey points */}
          {journeyPoints.map((point) => (
            <g key={point.id}>
              {/* Animated circle */}
              {animatedPoints.has(point.id) && (
                <>
                  {/* Pulse effect */}
                  <circle
                    cx={point.x * 10}
                    cy={point.y * 10}
                    r="15"
                    className={styles.pointPulse}
                  />
                  
                  {/* Main point */}
                  <circle
                    cx={point.x * 10}
                    cy={point.y * 10}
                    r="8"
                    className={styles.journeyPoint}
                    onMouseEnter={() => setActivePoint(point.id)}
                    onMouseLeave={() => setActivePoint(null)}
                  />
                  
                  {/* Year label */}
                  <text
                    x={point.x * 10}
                    y={point.y * 10 - 25}
                    className={styles.yearLabel}
                    textAnchor="middle"
                  >
                    {point.year}
                  </text>
                </>
              )}
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {activePoint && (
          <div className={styles.tooltip}>
            {(() => {
              const point = journeyPoints.find(p => p.id === activePoint)
              if (!point) return null
              return (
                <div>
                  <h4>{point.title}</h4>
                  <p className={styles.tooltipLocation}>{point.location}</p>
                  <p className={styles.tooltipDescription}>{point.description}</p>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}

export default WorldMapJourney
