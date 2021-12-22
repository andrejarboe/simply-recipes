import React from "react"
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
          <Link to="/" className="hover:text-gray-900 font-bold">
            Home
          </Link>
          <Link to="/recipes" className="hover:text-gray-900 font-bold">
            Recipes
          </Link>
          <Link to="/tags" className="hover:text-gray-900 font-bold">
            Tags
          </Link>
          <Link to="/about" className="hover:text-gray-900 font-bold">
            About
          </Link>
          <Link
            to="/contact"
            className="p-3 bg-purple-300 hover:bg-purple-200 text-purple-700 hover:text-purple-600 rounded shadow hover:shadow-xl transition duration-500 hidden lg:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
