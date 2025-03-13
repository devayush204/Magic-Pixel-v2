"use client"

import { useState } from "react"
import DynamicFrameLayout from "./DynamicFrameLayout"
import Image from "next/image"
import Link from "next/link"

export default function Section1() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 `}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={` text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              What
              <br />
              Magic Pixel
              <br />
              Does for You
            </h1>
            <div
              className={` flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                Magic Pixel is an AI-powered image editing platform that transforms the way you create and enhance visuals. Whether you need to resize images, remove backgrounds, or apply AI-driven enhancements based on text prompts, our intuitive platform makes it effortless.
                </p>
                <p>
                With seamless integration of Next.js for a responsive experience, CloudinaryAI for real-time image processing, and Supabase for secure storage, Magic Pixel offers a powerful and user-friendly solution. Elevate your visuals with advanced AI tools and bring your creative ideas to life in just a few clicks.
                </p>
                <p>Here are some of our favorite works so far.</p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
            <Link
              href="https://devayush.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/heroimg.jpeg"
                alt="Luma Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}

