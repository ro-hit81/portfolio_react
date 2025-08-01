"use client"

import React, { useState } from 'react'
import { MapPin, School, Briefcase, Award } from 'lucide  return (
    <div className="w-full bg-gray-50 py-12 mt-8 rounded-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My International Journey</h2>
          <p className="text-lg text-gray-600">Follow my educational and professional path across the globe</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">{/* Timeline */}
const SimpleWorldMap = () => {
  const [selectedEvent, setSelectedEvent] = useState<number>(0)

  const journeyEvents = [
    {
      id: 1,
      title: 'Bachelor in Geomatics Engineering',
      location: 'Nepal',
      period: '2015 - 2019',
      description: 'Completed bachelor\'s degree in Geomatics Engineering in Nepal.',
      type: 'education',
      icon: School
    },
    {
      id: 2,
      title: 'AIT Thailand Internship',
      location: 'Bangkok, Thailand',
      period: 'October 2019',
      description: '3-month internship at Asian Institute of Technology, GeoInformatics Center, Thailand.',
      type: 'work',
      icon: Briefcase
    },
    {
      id: 3,
      title: 'GLODAL Japan',
      location: 'Yokohama, Japan',
      period: '2020 - 2023',
      description: 'Worked for Japanese company GLODAL. Focused on satellite-based land-use mapping and deep learning models.',
      type: 'work',
      icon: Briefcase
    },
    {
      id: 4,
      title: 'Dual Master Degree - France',
      location: 'Vannes, France',
      period: 'August 2023',
      description: 'Started dual master degree program at Université Bretagne Sud in Vannes, France.',
      type: 'education',
      icon: School
    },
    {
      id: 5,
      title: 'University of Salzburg',
      location: 'Salzburg, Austria',
      period: 'September 2023',
      description: 'Continued master studies at University of Salzburg, Austria as part of dual degree program.',
      type: 'education',
      icon: School
    },
    {
      id: 6,
      title: 'Palacký University Olomouc',
      location: 'Olomouc, Czech Republic',
      period: 'February 2024',
      description: 'Studied at Palacký University Olomouc, Czech Republic as part of European master program.',
      type: 'education',
      icon: School
    },
    {
      id: 7,
      title: 'AI4AGRI Program',
      location: 'Brasov, Romania',
      period: 'May 2024',
      description: 'Participated in AI4AGRI program in Brasov, Romania focusing on AI applications in agriculture.',
      type: 'training',
      icon: Award
    },
    {
      id: 8,
      title: 'University of Lausanne',
      location: 'Lausanne, Switzerland',
      period: 'July 2024',
      description: 'Continued studies at University of Lausanne, Switzerland.',
      type: 'education',
      icon: School
    },
    {
      id: 9,
      title: 'INPE Brazil Internship',
      location: 'São José dos Campos, Brazil',
      period: 'August 2024',
      description: 'Internship at National Institute for Space Research (INPE) in Brazil, working on satellite data analysis.',
      type: 'work',
      icon: Briefcase
    },
    {
      id: 10,
      title: 'Return to France',
      location: 'Vannes, France',
      period: 'September 2024',
      description: 'Returned to Université Bretagne Sud in Vannes, France to continue master studies.',
      type: 'education',
      icon: School
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500'
      case 'work': return 'bg-green-500'
      case 'training': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">My International Journey</h2>
        <p className="text-lg text-gray-600">Follow my educational and professional path across the globe</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Journey Timeline</h3>
          <div className="space-y-3">
            {journeyEvents.map((event, index) => {
              const IconComponent = event.icon
              return (
                <div 
                  key={event.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    selectedEvent === index 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedEvent(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${getTypeColor(event.type)} text-white`}>
                      <IconComponent size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <span className="text-sm text-gray-500">{event.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <MapPin size={12} />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Event Details</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            {journeyEvents[selectedEvent] && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full ${getTypeColor(journeyEvents[selectedEvent].type)} text-white`}>
                    {React.createElement(journeyEvents[selectedEvent].icon, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {journeyEvents[selectedEvent].title}
                    </h4>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin size={14} />
                      {journeyEvents[selectedEvent].location}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {journeyEvents[selectedEvent].period}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {journeyEvents[selectedEvent].description}
                </p>
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(journeyEvents[selectedEvent].type)}`}>
                    {journeyEvents[selectedEvent].type.charAt(0).toUpperCase() + journeyEvents[selectedEvent].type.slice(1)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Progress Indicator */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Journey Progress</span>
              <span className="text-sm text-gray-500">{selectedEvent + 1} / {journeyEvents.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((selectedEvent + 1) / journeyEvents.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleWorldMap
