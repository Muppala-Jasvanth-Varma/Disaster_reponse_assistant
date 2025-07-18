"use client"

import { useState } from "react"
import { SharedHeader } from "../../components/shared-header"
import { SharedFooter } from "../../components/shared-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Search,
  Filter,
  Download,
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  AlertTriangle,
  BarChart3,
  LineChart,
  Eye,
} from "lucide-react"

interface DisasterReport {
  id: string
  date: string
  location: string
  disasterType: string
  status: "active" | "resolved" | "monitoring"
  severity: "low" | "medium" | "high" | "critical"
  affectedPeople: number
  responseTime: string
  insights: string
}

const mockReports: DisasterReport[] = [
  {
    id: "DR-2024-001",
    date: "2024-01-15",
    location: "Downtown District",
    disasterType: "Flooding",
    status: "active",
    severity: "high",
    affectedPeople: 2500,
    responseTime: "12 min",
    insights: "Social media reports indicate rapid water level rise",
  },
  {
    id: "DR-2024-002",
    date: "2024-01-14",
    location: "Forest Hills",
    disasterType: "Wildfire",
    status: "monitoring",
    severity: "critical",
    affectedPeople: 8900,
    responseTime: "8 min",
    insights: "Satellite imagery shows fire spreading northeast",
  },
  {
    id: "DR-2024-003",
    date: "2024-01-13",
    location: "Oak Avenue",
    disasterType: "Building Collapse",
    status: "resolved",
    severity: "critical",
    affectedPeople: 45,
    responseTime: "5 min",
    insights: "Emergency calls reported structural failure",
  },
  {
    id: "DR-2024-004",
    date: "2024-01-12",
    location: "Riverside Community",
    disasterType: "Power Outage",
    status: "resolved",
    severity: "medium",
    affectedPeople: 10000,
    responseTime: "25 min",
    insights: "Grid failure affecting residential area",
  },
  {
    id: "DR-2024-005",
    date: "2024-01-11",
    location: "Central Valley",
    disasterType: "Earthquake",
    status: "resolved",
    severity: "medium",
    affectedPeople: 1200,
    responseTime: "15 min",
    insights: "4.2 magnitude seismic activity detected",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-red-100 text-red-800"
    case "monitoring":
      return "bg-yellow-100 text-yellow-800"
    case "resolved":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

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

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredReports = mockReports.filter((report) => {
    const matchesSearch =
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.disasterType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || report.status === statusFilter
    const matchesType = typeFilter === "all" || report.disasterType === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Disaster Reports</h1>
          <p className="text-gray-600">Comprehensive analysis and tracking of disaster events</p>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold text-gray-900">247</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600">+12%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Incidents</p>
                  <p className="text-2xl font-bold text-gray-900">23</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingDown className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600">-8%</span>
                <span className="text-gray-500 ml-1">from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                  <p className="text-2xl font-bold text-gray-900">14 min</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingDown className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-green-600">-3 min</span>
                <span className="text-gray-500 ml-1">improvement</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">People Affected</p>
                  <p className="text-2xl font-bold text-gray-900">45.2K</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-orange-600 mr-1" />
                <span className="text-orange-600">+5.2K</span>
                <span className="text-gray-500 ml-1">this week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by location, disaster type, or report ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="monitoring">Monitoring</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Flooding">Flooding</SelectItem>
                  <SelectItem value="Wildfire">Wildfire</SelectItem>
                  <SelectItem value="Earthquake">Earthquake</SelectItem>
                  <SelectItem value="Building Collapse">Building Collapse</SelectItem>
                  <SelectItem value="Power Outage">Power Outage</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reports Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Disaster Events</CardTitle>
              <Badge variant="secondary">{filteredReports.length} reports</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Disaster Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Affected People</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {new Date(report.date).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          {report.location}
                        </div>
                      </TableCell>
                      <TableCell>{report.disasterType}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getSeverityColor(report.severity)}>{report.severity}</Badge>
                      </TableCell>
                      <TableCell>{report.affectedPeople.toLocaleString()}</TableCell>
                      <TableCell className="font-medium text-green-600">{report.responseTime}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="/dashboard">Return to Dashboard</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>

      <div className="mt-16">
        <SharedFooter />
      </div>
    </div>
  )
}
