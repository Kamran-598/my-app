/* eslint-disable @next/next/no-img-element */
import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/contact-pic.avif" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “0310-6865862, is my contact number.You can call me at any time on this phone number.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Kamran Aziz
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Tibbi Laran,RYK
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page