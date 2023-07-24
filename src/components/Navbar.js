import React from 'react'
import airbnb from '../../public/images/Airbnb.jgp'
import '../style.css'

const Navbar = () => {
  return (
    <nav>
        <img src={airbnb} className='nav--logo'/>
    </nav>
  )
}

export default Navbar