import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageSquare, Satellite, Phone } from "lucide-react"

interface DataSourceFiltersProps {
  selectedSources: string[]
  onSourceToggle: (source: string) => void
}

const dataSources = [
  {
    id: "social",
    label: "Social Media",
    icon: MessageSquare,
    color: "text-blue-600",
    count: 156,
  },
  {
    id: "satellite",
    label: "Satellite Imagery",
    icon: Satellite,
    color: "text-teal-600",
    count: 89,
  },
  {
    id: "emergency",
    label: "Emergency Calls",
    icon: Phone,
    color: "text-emerald-600",
    count: 67,
  },
]

export function DataSourceFilters({ selectedSources, onSourceToggle }: DataSourceFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Sources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {dataSources.map((source) => (
          <div key={source.id} className="flex items-center space-x-3">
            <Checkbox
              id={source.id}
              checked={selectedSources.includes(source.id)}
              onCheckedChange={() => onSourceToggle(source.id)}
            />
            <div className="flex items-center space-x-2 flex-1">
              <source.icon className={`w-4 h-4 ${source.color}`} />
              <label
                htmlFor={source.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {source.label}
              </label>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{source.count}</span>
          </div>
        ))}

        <div className="pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Total Active Sources:</span>
            <span className="text-gray-600">{dataSources.reduce((sum, source) => sum + source.count, 0)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
