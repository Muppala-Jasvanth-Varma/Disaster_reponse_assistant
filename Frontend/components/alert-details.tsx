"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, AlertTriangle, Users, Phone, MessageSquare, Satellite, ExternalLink } from "lucide-react"

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

interface AlertDetailsProps {
  event: Event | null
  isExpanded: boolean
  onToggle: () => void
}

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

const getRecommendedActions = (severity: string) => {
  switch (severity) {
    case "critical":
      return [
        "Deploy emergency response teams immediately",
        "Establish evacuation procedures",
        "Coordinate with local authorities",
        "Set up emergency shelters",
      ]
    case "high":
      return [
        "Monitor situation closely",
        "Prepare response teams for deployment",
        "Issue public safety warnings",
        "Coordinate with emergency services",
      ]
    case "medium":
      return ["Continue monitoring", "Alert relevant departments", "Prepare contingency plans", "Update stakeholders"]
    default:
      return ["Log incident for tracking", "Monitor for escalation", "Update status as needed"]
  }
}

export function AlertDetails({ event, isExpanded, onToggle }: AlertDetailsProps) {
  if (!event) {
    return (
      <Card className="border-dashed border-2 border-gray-200">
        <CardContent className="flex items-center justify-center h-32">
          <p className="text-gray-500 text-center">
            Select an event from the Live Event Feed to view detailed information
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            Alert Details
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onToggle} className="text-blue-600 hover:text-blue-700">
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Event Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-gray-900 leading-tight">{event.title}</h3>
            <Badge className={`${getSeverityColor(event.severity)} ml-2`}>{event.severity}</Badge>
          </div>

          <p className="text-gray-700">{event.description}</p>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              {getSourceIcon(event.source)}
              <span className="capitalize">{event.source}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {event.timestamp}
            </div>
          </div>
        </div>

        {isExpanded && (
          <>
            <Separator />

            {/* Detailed Information */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location Details</h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Coordinates:</span>
                      <span className="ml-2 font-mono">
                        {event.coordinates[0]}, {event.coordinates[1]}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Region:</span>
                      <span className="ml-2">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Recommended Actions</h4>
                <div className="space-y-2">
                  {getRecommendedActions(event.severity).map((action, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact Assessment</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">Estimated Affected</span>
                    </div>
                    <span className="text-lg font-bold text-blue-900">
                      {event.severity === "critical"
                        ? "2,500+"
                        : event.severity === "high"
                          ? "500-1,000"
                          : event.severity === "medium"
                            ? "100-500"
                            : "< 100"}{" "}
                      people
                    </span>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-900">Risk Level</span>
                    </div>
                    <span className="text-lg font-bold text-orange-900 capitalize">{event.severity}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
                <Button variant="outline">Assign Team</Button>
                <Button variant="outline">Create Report</Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
