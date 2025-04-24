import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-800 mb-6"
      >
        Hi, I'm <strong>Abhishek Gupta</strong>, a passionate <strong>BCA student</strong> from <strong>UP Ghazipur</strong>. 
        I've been fascinated by coding since I was in 10th grade. It all started with a curiosity about how video games and apps were created, 
        which led me into web development.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-800 mb-6"
      >
        Currently, I'm studying at <strong>Teri PG College</strong>, and I'm focused on building my skills as a front-end developer. 
        I love creating <strong>Single Page Applications (SPAs)</strong> and designing seamless user experiences. 
        I have experience with technologies like <strong>HTML, CSS, JavaScript, React, Tailwind CSS, Redux, and Context API</strong>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">My Skills</h2>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Redux</li>
          <li>Context API</li>
          <li>Single Page Applications (SPAs)</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Featured Projects</h2>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li>
            <a
              href="https://your-link-to-todo-app"
              className="text-blue-500 hover:text-blue-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              To-Do App with Redux
            </a> - A task manager built using React and Redux.
          </li>
          <li>
            <a
              href="https://your-link-to-weather-app"
              className="text-blue-500 hover:text-blue-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather App
            </a> - A web app that shows the current weather using a third-party API.
          </li>
          <li>
            <a
              href="https://your-link-to-portfolio"
              className="text-blue-500 hover:text-blue-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio
            </a> - A showcase of my skills and projects.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Hobbies & Interests</h2>
        <p className="text-lg text-gray-800 mb-4">
          I'm passionate about <strong>playing video games</strong>. Gaming not only helps me unwind, but it also inspires my creative 
          thinking when developing apps. The problem-solving challenges in games greatly influence how I approach coding.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-800 mb-4">
          Feel free to <a href="mailto:your-email@example.com" className="text-blue-500 hover:text-blue-700 transition-all">contact me</a> 
          or connect with me on <a href="https://www.linkedin.com/in/your-linkedin-profile" 
          className="text-blue-500 hover:text-blue-700 transition-all" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
