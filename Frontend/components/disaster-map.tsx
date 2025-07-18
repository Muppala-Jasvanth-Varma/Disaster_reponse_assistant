import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Layers, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DisasterMap() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Real-Time Disaster Map
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Live
            </Badge>
            <Button variant="ghost" size="sm">
              <Layers className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative h-[500px] bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 rounded-lg mx-6 mb-6 overflow-hidden">
          {/* Map Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map View</h3>
              <p className="text-gray-500 max-w-md">
                Real-time disaster monitoring map would be integrated here using services like Mapbox, Google Maps, or
                OpenStreetMap
              </p>
            </div>
          </div>

          {/* Mock Disaster Markers */}
          <div className="absolute top-20 left-32 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
          <div className="absolute top-40 right-24 w-4 h-4 bg-orange-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
          <div className="absolute bottom-32 left-20 w-4 h-4 bg-yellow-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
          <div className="absolute bottom-20 right-32 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <h4 className="text-sm font-semibold mb-2">Severity Levels</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Critical</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>High</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Medium</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Low</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
