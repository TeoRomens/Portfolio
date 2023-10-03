"use client"
import React from "react";
import {TypeAnimation} from "react-type-animation";

export default function Home() {
  return (
      <div className="flex min-h-screen items-center justify-center overflow-hidden flex-col bg-[#121212]">
          <section>
              <h1 className="text-white mb-4 text-6xl sm:text-5xl lg:text-8xl font-display">
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400'>
                      Hello, I&apos;m <br/>
                  </span>
                  <TypeAnimation
                      sequence={[
                          // Same substring at the start will only be typed out once, initially
                          'Matteo',
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          'App Developer',
                          1000,
                          'Drone Pilot',
                          1000,
                          'Basketball Player',
                          1000
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                  />
              </h1>
          </section>
      </div>
  );
}