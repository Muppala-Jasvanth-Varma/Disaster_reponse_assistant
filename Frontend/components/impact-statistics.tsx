import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, AlertTriangle, MapPin } from "lucide-react"

const statistics = [
  {
    label: "Active Incidents",
    value: "23",
    change: "+5",
    changeType: "increase",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    label: "People Affected",
    value: "12,847",
    change: "+2,341",
    changeType: "increase",
    icon: Users,
    color: "text-orange-600",
  },
  {
    label: "Regions Monitored",
    value: "156",
    change: "+12",
    changeType: "increase",
    icon: MapPin,
    color: "text-blue-600",
  },
  {
    label: "Response Teams",
    value: "34",
    change: "+8",
    changeType: "increase",
    icon: TrendingUp,
    color: "text-green-600",
  },
]

const disasterTypes = [
  { type: "Flooding", count: 8, severity: "high" },
  { type: "Wildfire", count: 5, severity: "critical" },
  { type: "Earthquake", count: 3, severity: "medium" },
  { type: "Storm", count: 4, severity: "high" },
  { type: "Power Outage", count: 3, severity: "low" },
]

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "low":
      return "bg-green-100 text-green-800"
    case "medium":
      return "bg-yellow-100 text-yellow-800"
    case "high":
      return "bg-orange-100 text-orange-800"
    case "critical":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function ImpactStatistics() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Impact Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {statistics.map((stat) => (
              <div key={stat.label} className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disaster Types */}
      <Card>
        <CardHeader>
          <CardTitle>Disaster Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {disasterTypes.map((disaster) => (
              <div key={disaster.type} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900">{disaster.type}</span>
                  <Badge className={`text-xs ${getSeverityColor(disaster.severity)}`}>{disaster.severity}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">{disaster.count}</span>
                  <span className="text-sm text-gray-500">incidents</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Urgency Scale */}
      <Card>
        <CardHeader>
          <CardTitle>Urgency Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Critical</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-red-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">6</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">High</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">8</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Medium</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-yellow-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">6</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Low</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">3</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
