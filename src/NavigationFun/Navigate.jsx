import React from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
  return (
    <nav>
        <Link to="/" style={{padding:'30px',textDecoration:'none',color:'white'}}>Home</Link>
        <Link to="/users" style={{padding:'30px',textDecoration:'none',color:'white'}}>Users</Link>
        <Link to="/about" style={{padding:'30px',textDecoration:'none',color:'white'}}>About</Link>
        <Link to="/contact" style={{padding:'30px',textDecoration:'none',color:'white'}}>Contact</Link>
    </nav>
  )
}

export default Navigate