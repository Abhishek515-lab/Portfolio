import React from 'react'
import Header from './Componet/Header'
import Footer from './Componet/Footer'
import { Outlet } from 'react-router-dom'

import './App.css'
function Root(){
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root