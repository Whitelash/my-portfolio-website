import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Greetings, I'm</h5>
        <h1>Peace Osenah</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <HeaderSocials />
      </div>

    </header>
  )
}

export default Header