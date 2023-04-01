import React, { useState } from 'react'
import Data from './Data'
import './Main.css'
import Links from './Link'
import Footer from './Footer'
import Nav from './Nav'
function Main() {


  return (
    <div className='main'>
     <Nav/>
     <Links/>
     <Footer/>
    </div>
  )
}

export default Main
