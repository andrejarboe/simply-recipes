import { Link } from "gatsby"
import React from "react"
import MainLayout from "../components/Layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <head>
        <title>Simply Recipes | Home</title>
      </head>
      <h1 className="text-3xl text-blue-300 font-bold underline">
        Hello world!
      </h1>
      <Link to="/about" className="">
        about
      </Link>
    </MainLayout>
  )
}
