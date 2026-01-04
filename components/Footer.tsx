'use client'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import NextImage from 'next/image'

const Footer = () => {
  const handleButtonClick = () => {
    const email = 'atiqul.islam0108@gmail.com'
    const subject = encodeURIComponent('Subject Here')
    const body = encodeURIComponent('Body content here')
    // Link to open Gmail compose window directly
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`

    window.open(gmailLink, '_blank')
  }

  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10  my-6 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:atiqul.islam0108@gmail.com"></a>
        <MagicButton
          title="let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={handleButtonClick}
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center ">
        <p className="md:text-base text-sm md:font-normal font-light mb-6 md:mb-0 lg:mb-0">
          Copyright © 2023 By Atiqul Islam
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a href={profile.link} target="_blank" key={profile.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <NextImage
                  src={profile.img}
                  alt={String(profile.id)}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
