import { Shield } from "lucide-react"
import Link from "next/link"

export function SharedFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Multimodal Disaster Response Assistant</span>
          </div>

          <nav className="flex space-x-8">
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Multimodal Disaster Response Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
