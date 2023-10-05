"use client"
import React from "react";
import {TypeAnimation} from "react-type-animation";
import Image from "next/image";
import background1 from "./public/images/background-1.png"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden bg-[#121212]">
          <h1 className="text-white py-72 text-6xl lg:text-8xl font-display">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-cyan-400'>
                  Hello, I&apos;m <br/>
              </span>
              <TypeAnimation
                  sequence={[
                      'Matteo',
                      1000,
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
          <div className="delay-2000 animate-fade-in">
              <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full absolute bottom-10">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </div>
          </div>
      </div>
  );
}