import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import html from "../assets/HTML_Logo.webp"
import js from "../assets/js.svg"
import react from "../assets/react-256.webp"
import node from "../assets/nodejs-light-256.webp"
import tail from "../assets/Tailwind-CSS.svg"
import css from "../assets/CSS3.png"
import { TypeAnimation } from 'react-type-animation'


const Home = () => {



  return (
    <div>
      <div className='hero'>
        <div className="min-h-screen w-250 flex justify-around flex-col items-center mx-60 ">
          <div className="text-left w-250  flex justify-between my-30 ">
            <div className='w-90 m-10'>

              <h1 className="text-3xl font-bold text-blue-500 animate-bounce">Hello,</h1>
              <h2 className="text-3xl font-bold text-gray-900  "> I'm Abhishek Gupta </h2>
              <p className="text-xl my-3">I am a frontend Developer. I can create intreactive Single Page Applications for you!</p>
              <div className="h-30">
                <TypeAnimation
                  sequence={[
                    "Crafting modern web platforms.",
                    1500,
                    "Crafting modern web solutions.",
                    1500,
                    "Crafting modern web experiences.",
                    1500,
                    "Crafting modern web interfaces.",
                    1500,
                    "Crafting modern web ecosystems.",
                    1500,
                    "Crafting modern web tools.",
                    1500
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>


             <Link to="/contact"><button className='bg-blue-600 w-30 h-10 text-white text-20 cursor-pointer'>Contact</button></Link>



            </div>
            <div className="co-img my-20"> </div>
          </div>
        </div>


        {/* Skills Section */}
        <section id="skills" className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Skill 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center items-center my-3">
                <img src={html} alt="html"
                  className='w-25 h-25 '
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">HTML</h3>
              <div className="w-full bg-gray-200 h-2 mb-4">
                <div className="bg-blue-500 h-2" style={{ width: "90%" }}></div>
              </div>
              <p className="text-gray-600">Expert in HTML5 and semantic markup.</p>
            </div>

            {/* Skill 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center items-center my-3">
                <img src={css} alt="html"
                  className='w-25 h-25 '
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">CSS</h3>
              <div className="w-full bg-gray-200 h-2 mb-4 transition-1">
                <div className="bg-blue-500 h-2" style={{ width: "85%" }}></div>
              </div>
              <p className="text-gray-600">Proficient in CSS3, Flexbox, and Grid systems.</p>
            </div>

            {/* Skill 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center items-center my-3">
                <img src={js} alt="html"
                  className='w-25 h-25 '
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
              <div className="w-full bg-gray-200 h-2 mb-4">
                <div className="bg-blue-500 h-2" style={{ width: "80%" }}></div>
              </div>
              <p className="text-gray-600">Strong knowledge of ES6+ features and DOM manipulation.</p>
            </div>

            {/* Skill 4 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center items-center my-3">
                <img src={react} alt="html"
                  className='w-25 h-25 '
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">React</h3>
              <div className="w-full bg-gray-200 h-2 mb-4">
                <div className="bg-blue-500 h-2" style={{ width: "75%" }}></div>
              </div>
              <p className="text-gray-600">Experienced with React, hooks, and state management.</p>
            </div>

            {/* Skill 5 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center items-center my-3">
                <img src={tail} alt="html"
                  className='w-25 h-25 '
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tailwind CSS</h3>
              <div className="w-full bg-gray-200 h-2 mb-4">
                <div className="bg-blue-500 h-2" style={{ width: "70%" }}></div>
              </div>
              <p className="text-gray-600">Skilled in using Tailwind CSS for responsive designs.</p>
            </div>

            {/* Skill 6 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center items-center my-3">
                <img src={node} alt="html"
                  className='w-25 h-25 '
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Node.js</h3>
              <div className="w-full bg-gray-200 h-2 mb-4">
                <div className="bg-blue-500 h-2" style={{ width: "20%" }}></div>
              </div>
              <p className="text-gray-600">Basic understanding of backend development using Node.js.</p>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default Home
