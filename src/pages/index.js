import { Link } from "gatsby"
import React from "react"
import MainLayout from "../components/Layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <head>
        <title>Simply Recipes | Home</title>
      </head>
      <section>
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden shadow-lg cursor-pointer">
            <img
              className="object-cover w-full h-[500px]"
              src="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Flower and sky"
            />

            <div className="absolute top-1/4 px-6 py-4 w-full text-center">
              <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white">
                This is the title
              </h4>
              {/* <p className="leading-normal text-gray-100">
                Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
                Praesen tium, quibusdam facere quo laborum maiores sequi nam
                tenetur laud.
              </p> */}
              <a href="/contact">
                <button className="text-accent bg-white bg-white px-10 py-4 shadow-sm rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                  Get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
