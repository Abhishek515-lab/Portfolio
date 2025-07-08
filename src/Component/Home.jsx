import React from 'react'
import { Link } from 'react-router-dom'
import html from "../assets/HTML_Logo.webp"
import js from "../assets/js.svg"
import reactLogo from "../assets/react-256.webp"
import node from "../assets/nodejs-light-256.webp"
import tail from "../assets/Tailwind-CSS.svg"
import css from "../assets/CSS3.png"
import profile from '../assets/abhi.png'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
  <div className='hero min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 py-12 gap-8 md:gap-16'>
  {/* Left Section - Text Content */}
  <div className='flex-1 text-center md:text-left px-20'>
    <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2 animate-bounce">Hello,</h1>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">I'm Abhishek Gupta</h2>
    <p className="text-lg md:text-xl mb-4">I am a frontend Developer. I can create interactive Single Page Applications for you!</p>

    <div className="mb-6 text-blue-600 font-semibold">
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
        style={{ fontSize: '1.5rem', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>

    <Link to="/contact">
      <button className='bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-700 transition'>
        Contact
      </button>
    </Link>
  </div>

  {/* Right Section - Image with Background Design */}
  <div className='relative flex-1 flex justify-center items-center mb-10 md:mb-0'>
    {/* Gradient Background Circle */}
    <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-300 via-purple-400 to-pink-300 blur-2xl opacity-40 animate-pulse"></div>

    {/* Profile Image */}
    <img
      src={profile}
      alt="Profile"
      className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
    />
  </div>
</div>



      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Item Template */}
          {[
            { img: html, title: "HTML", level: "90%", desc: "Expert in HTML5 and semantic markup." },
            { img: css, title: "CSS", level: "85%", desc: "Proficient in CSS3, Flexbox, and Grid systems." },
            { img: js, title: "JavaScript", level: "80%", desc: "Strong knowledge of ES6+ features and DOM manipulation." },
            { img: reactLogo, title: "React", level: "75%", desc: "Experienced with React, hooks, and state management." },
            { img: tail, title: "Tailwind CSS", level: "70%", desc: "Skilled in using Tailwind CSS for responsive designs." },
            { img: node, title: "Node.js", level: "20%", desc: "Basic understanding of backend development using Node.js." }
          ].map((skill, idx) => (
            <div key={idx} className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center items-center mb-4">
                <img src={skill.img} alt={skill.title} className='w-16 h-16 object-contain' />
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <div className="w-full bg-gray-200 h-2 mb-4 rounded">
                <div className="bg-blue-500 h-2 rounded" style={{ width: skill.level }}></div>
              </div>
              <p className="text-gray-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
