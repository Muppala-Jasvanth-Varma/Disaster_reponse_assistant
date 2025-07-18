"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Satellite, Phone, MapPin, Clock } from "lucide-react"

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

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Flooding reported in downtown area",
    description: "Multiple social media reports of severe flooding on Main Street. Water levels rising rapidly.",
    source: "social",
    severity: "high",
    location: "Downtown District",
    timestamp: "2 minutes ago",
    coordinates: [40.7128, -74.006],
  },
  {
    id: "2",
    title: "Satellite detects wildfire expansion",
    description: "Thermal imaging shows fire spreading northeast at approximately 15 mph.",
    source: "satellite",
    severity: "critical",
    location: "Forest Hills",
    timestamp: "5 minutes ago",
    coordinates: [34.0522, -118.2437],
  },
  {
    id: "3",
    title: "Emergency call: Building collapse",
    description: "911 call reporting partial building collapse on Oak Avenue. Multiple people trapped.",
    source: "emergency",
    severity: "critical",
    location: "Oak Avenue",
    timestamp: "8 minutes ago",
    coordinates: [41.8781, -87.6298],
  },
  {
    id: "4",
    title: "Power outage affecting 10,000 homes",
    description: "Social media reports widespread power outage in residential area.",
    source: "social",
    severity: "medium",
    location: "Riverside Community",
    timestamp: "12 minutes ago",
    coordinates: [39.7392, -104.9903],
  },
  {
    id: "5",
    title: "Earthquake detected - 4.2 magnitude",
    description: "Seismic sensors detect moderate earthquake. No immediate damage reports.",
    source: "satellite",
    severity: "medium",
    location: "Central Valley",
    timestamp: "18 minutes ago",
    coordinates: [36.7783, -119.4179],
  },
]

const getSourceIcon = (source: string) => {
  switch (source) {
    case "social":
      return <MessageSquare className="w-4 h-4" />
    case "satellite":
      return <Satellite className="w-4 h-4" />
    case "emergency":
      return <Phone className="w-4 h-4" />
    default:
      return <MessageSquare className="w-4 h-4" />
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "low":
      return "bg-green-100 text-green-800 border-green-200"
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "high":
      return "bg-orange-100 text-orange-800 border-orange-200"
    case "critical":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

interface LiveEventFeedProps {
  onEventSelect: (event: Event) => void
  selectedEventId?: string
  filteredSources: string[]
}

export function LiveEventFeed({ onEventSelect, selectedEventId, filteredSources }: LiveEventFeedProps) {
  const filteredEvents = mockEvents.filter(
    (event) => filteredSources.length === 0 || filteredSources.includes(event.source),
  )

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Live Event Feed
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] px-6">
          <div className="space-y-3 pb-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedEventId === event.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => onEventSelect(event)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getSourceIcon(event.source)}
                    <h4 className="font-semibold text-sm text-gray-900">{event.title}</h4>
                  </div>
                  <Badge className={`text-xs ${getSeverityColor(event.severity)}`}>{event.severity}</Badge>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
