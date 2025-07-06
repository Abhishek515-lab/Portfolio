import React from 'react'

const Project = () => {
  return (
    <div>
        <div className="h-screen flex justify-center ">
        <section id="skills" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            
            <p className="text-gray-600">Weather App</p>
          </div>
          
          {/* Skill 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            
            <p className="text-gray-600">blog Website</p>
          </div>
          

          


          {/* Skill 5 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          
            <p className="text-gray-600">To-do App</p>
          </div>
          
      
        </div>
      </section>
      </div>
    </div>
  )
}

export default Project
