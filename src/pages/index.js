import React from "react"
import Hero1 from "../components/Hero/Hero1"
import MainLayout from "../components/Layouts/MainLayout"
import Images from "../examples/Images"

export default function Home() {
  return (
    <MainLayout>
      <head>
        <title>Simply Recipes | Home</title>
      </head>
      <Hero1 />

      <Images />
    </MainLayout>
  )
}
