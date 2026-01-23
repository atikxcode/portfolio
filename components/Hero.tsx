"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { Hero3D } from './ui/Hero3D'
import { FaLocationArrow } from 'react-icons/fa6'

import { useLenis } from 'lenis/react'

const Hero = () => {
  const lenis = useLenis()
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="pb-20 pt-36">
      {/* Spot Light */}
      <div>
        <Spotlight
          className="top-40 -left-10 md:-left-32 md:-top-20 h-full"
          fill="white"
        ></Spotlight>

        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        ></Spotlight>

        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        ></Spotlight>
      </div>

      {/* Grid Layout */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 will-change-transform">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>



      {/* Other Information */}
      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Building Scalable Software Solutions with Full Stack Expertise
          </h2>

          {/* Profile Picture Section */}
          <div className="relative my-8 md:my-12">
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-purple/30 shadow-[0_0_40px_rgba(203,172,249,0.3)] bg-[#10132E] will-change-transform">
              <Image
                src="/profile.png"
                alt="Atiqul Islam - Full Stack Developer"
                fill
                className="object-cover object-center rounded-full"
                priority
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
                onLoad={() => setImageLoaded(true)}
                loading="eager"
              />
            </div>
            {/* Decorative ring - only animate once when loaded */}
            <div
              className={`absolute inset-0 rounded-full border-2 border-purple/20 -m-2 ${imageLoaded ? 'animate-pulse' : ''}`}
              style={{ animationIterationCount: imageLoaded ? 'infinite' : '0' }}
            />
          </div>

          <TextGenerateEffect
            className="text-center text-[30px] md:text-4xl lg:text-5xl"
            words="Transforming Ideas into Robust Software Solutions Across the Full Stack"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl mt-4 text-blue-100">
            Hi, I&apos;m Atiqul Islam, a Full Stack Software Developer.
          </p>

          <a href="#about" onClick={(e) => {
            e.preventDefault()
            lenis?.scrollTo('#about')
          }}>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow></FaLocationArrow>}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero

