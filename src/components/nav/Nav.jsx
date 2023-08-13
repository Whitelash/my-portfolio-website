import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BsPersonVcardFill} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {AiFillMessage} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPersonVcardFill/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>

    </nav>
  )
}

export default Nav