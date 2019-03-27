import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const headerStyle = {
  textAlign: 'center',
  paddingTop: 15,
  paddingBottom: 50,
}

const Header = () => {
  return(
    <header style={headerStyle}>
      <h1>On Track</h1>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
    </header>
  )
}

export default Header
