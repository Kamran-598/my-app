/* eslint-disable @next/next/no-img-element */
import React from 'react'

const  page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home-pic.avif" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tibbi Laran, a rural area in the Rahim Yar Khan district of Pakistan, is known for its peaceful and natural environment.
           Homes in this region often reflect a simple, traditional lifestyle, with close-knit communities where neighbors are familiar with one another. Your home in Tibbi Laran might be surrounded by agricultural fields, offering serene views and a slower pace of life. The architecture may feature elements suited to the climate, such as large courtyards for ventilation and shaded verandas to escape the heat. The sense of tranquility and connection to nature likely defines your home’s atmosphere..”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Kamran Aziz
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Tibbi Laran, Rahim Yar Khan
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page