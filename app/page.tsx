"use client"
import React from "react";
import {TypeAnimation} from "react-type-animation";
import Particles from "./components/particles";

export default function Home() {
  return (
      <div className="flex flex-col w-screen items-center justify-center overflow-hidden bg-[#121212]">
          <Particles
              className="absolute inset-0"
              quantity={100}
          />
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
          <section className="bg-cyan-950 flex items-center justify-center">
              <div className="flex flex-col gap-12 max-w-custom w-5/6 pt-20 pb-20">
                  <div className="flex flex-col gap-3">
                      <h2 className="title text-left text-white text-4xl">
                          About
                          <span className="text-primary text-teal-500">.</span>
                      </h2><p className="text-lg text-white">Hi there! My name is Matteo Roman, I&apos;m a Computer Science Engineer student at Politecnico di Milano, Italy. Currently I&apos;m a software engineer student with a passion for creating beautiful and functional web and mobile apps. My strongest skill is Flutter and I&apos;m constantly expanding my knowledge with new technologies and tools, like Next.js, HTML, CSS, Tailwind.</p>
                  </div>
                  <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 text-white">
                      <div className="flex flex-col gap-3">
                          <h3 className="text-left text-2xl font-medium dark:text-white">
                              Education:</h3>
                          <ul className="marker:text-primary list-disc text-lg flex flex-wrap flex-row gap-5 lg:flex-col lg:gap-4">
                              <li className="ml-5">
                                  Master Degree
                                  <span className="italic opacity-60 text-base block">
                                      Politecnico di Milano - Computer Science Engineering <span className="block">2022 - Present</span>
                                  </span>
                              </li>
                              <li className="ml-5">Brachelor Degree Ingegneria Informatica<span className="italic opacity-60 text-base block">Politecnico di Milano <span className="block">2019 - 2022</span></span></li>
                          </ul>
                      </div>
                      <div className="flex flex-col gap-5">
                          <h3 className="text-left text-2xl font-medium dark:text-white">Tech Stack:</h3>
                          <div className="flex flex-wrap gap-6">
                              <div className="flex flex-col items-center justify-center gap-1">
                                  <img src="https://sbetav.me/assets/html-52732337.svg" alt="HTML" className="w-11 h-12 select-none"/>
                                      <p className="text-center">HTML</p>
                                  </div>
                              <div className="flex flex-col items-center justify-center gap-1">
                                  <img src="https://sbetav.me/assets/css-8e01670c.svg" alt="CSS" className="w-11 h-12 select-none"/>
                                      <p className="text-center">CSS</p>
                                  </div>
                              <div className="flex flex-col items-center justify-center gap-1">
                                  <img src="https://sbetav.me/assets/javascript-0ac5e3cc.svg" alt="JavaScript" className="w-11 h-12 select-none"/>
                                      <p className="text-center">JavaScript</p>
                                  </div>
                              <div className="flex flex-col items-center justify-center gap-1">
                                  <img src="https://sbetav.me/assets/react-9fe43511.svg" alt="React" className="w-11 h-12 select-none"/>
                                      <p className="text-center">React</p>
                                  </div>
                              <div className="flex flex-col items-center justify-center gap-1">
                                  <img src="https://sbetav.me/assets/tailwind-2a43431b.svg" alt="Tailwind" className="w-11 h-12 select-none"/>
                                  <p className="text-center">Tailwind</p>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-1">
                                  <img src="https://sbetav.me/assets/git-3f0b1bae.svg" alt="Git" className="w-11 h-12 select-none"/>
                                      <p className="text-center">Git</p>
                                  </div>
                              <div className="flex flex-col items-center justify-center gap-1">
                                  <img src="https://sbetav.me/assets/github-0ad982ff.svg" alt="GitHub" className="w-11 h-12 select-none"/>
                                      <p className="text-center">GitHub</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className=" flex items-center justify-center">
              <div className="flex flex-col gap-12 max-w-custom w-5/6 pt-20 pb-20">
                  <div className="flex flex-col gap-3">
                      <h2 className="title text-left text-white text-4xl">
                          Projects
                          <span className="text-primary text-cyan-500">.</span>
                      </h2>
                  </div>
              </div>
          </section>
      </div>
  );
}