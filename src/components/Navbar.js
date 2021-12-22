import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
      <nav className="text-gray-600 shadow-lg">
        <div className="container flex justify-between px-6 py-6 mx-auto py lg:px-0">
          {/* left header  */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-teal-800">
              Simply Recipes
            </Link>
          </div>
          {/* right header */}
          <div className="flex items-center space-x-4 ">
            <Link to="/about" className="hover:text-gray-900">
              About
            </Link>
            <Link to="#" className="hover:text-gray-900">
              History
            </Link>
          </div>
        </div>
      </nav>
    )
}
