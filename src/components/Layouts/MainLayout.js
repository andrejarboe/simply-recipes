import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

export default function MainLayout(props) {
  return (
    <>
      <Navbar />
      <div className="pattern min-h-[80vh]">{props.children}</div>
      <Footer />
    </>
  )
}
