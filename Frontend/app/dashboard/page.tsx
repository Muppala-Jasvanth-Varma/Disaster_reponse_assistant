"use client"

import { useState } from "react"
import { SharedHeader } from "../../components/shared-header"
import { DisasterMap } from "../../components/disaster-map"
import { LiveEventFeed } from "../../components/live-event-feed"
import { ImpactStatistics } from "../../components/impact-statistics"
import { DataSourceFilters } from "../../components/data-source-filters"
import { AlertDetails } from "../../components/alert-details"

interface Event {
  id: string
  title: string
  description: string
  source: "social" | "satellite" | "emergency"
  severity: "low" | "medium" | "high" | "critical"
  location: string
  timestamp: string
  coordinates: [number, number]
}

export default function DashboardPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isAlertDetailsExpanded, setIsAlertDetailsExpanded] = useState(false)
  const [selectedSources, setSelectedSources] = useState<string[]>([])

  const handleSourceToggle = (source: string) => {
    setSelectedSources((prev) => (prev.includes(source) ? prev.filter((s) => s !== source) : [...prev, source]))
  }

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event)
    setIsAlertDetailsExpanded(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Monitoring Dashboard</h1>
          <p className="text-gray-600">Real-time disaster monitoring and response coordination</p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Section - Takes up most space */}
          <div className="lg:col-span-3">
            <DisasterMap />
          </div>

          {/* Right Sidebar - Filters and Statistics */}
          <div className="space-y-6">
            <DataSourceFilters selectedSources={selectedSources} onSourceToggle={handleSourceToggle} />
            <ImpactStatistics />
          </div>
        </div>

        {/* Bottom Section - Event Feed and Alert Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <LiveEventFeed
            onEventSelect={handleEventSelect}
            selectedEventId={selectedEvent?.id}
            filteredSources={selectedSources}
          />

          <AlertDetails
            event={selectedEvent}
            isExpanded={isAlertDetailsExpanded}
            onToggle={() => setIsAlertDetailsExpanded(!isAlertDetailsExpanded)}
          />
        </div>
      </main>
    </div>
  )
}
