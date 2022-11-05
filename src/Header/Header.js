import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

const Header = ({cartItem}) => {
  return (
    <div>
      <Search cartItem={cartItem}/>
      <Navbar/>
    </div>
  )
}

export default Header
