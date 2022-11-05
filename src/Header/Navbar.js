import React, { useState } from 'react'
import './Header.css'
import {Link} from "react-router-dom"
const Navbar = () => {
    const[mobileMenu,setMobileMenu] = useState(false)
  return (
    <div>
      
      <header className='header'>
        <div className='container d-flex'>
            <div className='categories d-flex'>
                <h4>
                    Categories<i className='fa fa-chevron-down'></i>
                </h4>
            </div>
            <div className='navlink'>
                <ul className={mobileMenu? "nav-links-mobileMenu" : "link f-flex capitalize"} onClick={()=> setMobileMenu(false)}>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/pages'>pages</Link>
                    </li>
                    <li>
                        <Link to='/user'>user account</Link>
                    </li>
                    <li>
                        <Link to='/vendor'>vendor account</Link>
                    </li>
                    <li>
                        <Link to='/track'>track my order</Link>
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>
                </ul>

                <button className='toggle' onClick={()=> setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <i className='fas fa-times close home-btn'></i>:
                    <i className='fa-solid fa-bars open'></i>
                    }
                </button>

            </div>

        </div>

      </header>
    </div>
  )
}

export default Navbar
