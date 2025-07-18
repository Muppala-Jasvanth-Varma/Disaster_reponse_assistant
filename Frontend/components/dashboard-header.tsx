"use client"

import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Multimodal Disaster Response Assistant</h1>
              <p className="text-sm text-blue-600 font-medium">Real-Time Insights for Emergency Response</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
              Dashboard
            </Link>
            <Link href="/reports" className="text-gray-600 hover:text-blue-600 transition-colors">
              Disaster Reports
            </Link>
            <Button asChild variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
              <Link href="/login">Team Login</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-blue-600 font-semibold">
                Dashboard
              </Link>
              <Link href="/reports" className="text-gray-600 hover:text-blue-600 transition-colors">
                Disaster Reports
              </Link>
              <Link href="/login" className="text-blue-600 font-medium">
                Team Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
