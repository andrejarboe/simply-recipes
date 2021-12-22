import React from "react"
import { Link } from "gatsby"
import { MenuIcon } from "@heroicons/react/outline"

export default function Navbar() {
  return (
    <nav className="text-gray-600 shadow-lg">
      <div className="container flex flex-col md:flex-row justify-between px-6 py-4 md:py-6 mx-auto py lg:px-0">
        {/* left header  */}
        <div className="flex items-center justify-between pb-4 md:pb-0">
          <Link
            to="/"
            className="text-2xl font-bold text-teal-800 drop-shadow-2xl"
          >
            Simply Recipes
          </Link>
          <button className="flex justify-center items-center md:hidden">
            <MenuIcon className="h-8 w-auto text-2xl text-purple-500 flex items-center justify-center " />
          </button>
        </div>
        {/* right header */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center px-6 space-x-4 space-y-4 md:space-y-0 ">
          <Link
            to="/"
            className="hover:text-gray-900 font-bold w-full border-t pt-4 md:border-t-0 md:pt-0 "
            activeClassName="text-purple-600"
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="hover:text-gray-900 font-bold w-full border-t pt-4 md:border-t-0 md:pt-0 "
            activeClassName="text-purple-600"
          >
            Recipes
          </Link>
          <Link
            to="/tags"
            className="hover:text-gray-900 font-bold w-full border-t pt-4 md:border-t-0 md:pt-0 "
            activeClassName="text-purple-600"
          >
            Tags
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-900 font-bold w-full border-t pt-4 md:border-t-0 md:pt-0 "
            activeClassName="text-purple-600"
          >
            About
          </Link>
          <div className="w-full border-t pt-6 md:border-t-0 md:pt-0">
            <Link
              to="/contact"
              className="p-3 bg-purple-300 hover:bg-purple-200 text-purple-700 hover:text-purple-600 rounded shadow hover:shadow-xl transition duration-500 "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
