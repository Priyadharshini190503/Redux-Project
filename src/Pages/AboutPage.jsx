import React from 'react'
import { useNavigate } from 'react-router-dom'
const AboutPage = () => {
  const navigate = useNavigate()
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1 style={{display:'flex',justifyContent:'center',textAlign:'center',fontSize:'120px',color:'black'}}>AboutPage</h1>
        <button onClick={()=>navigate('/personalinfo')} style={{padding:'20px',backgroundColor:'violet',borderRadius:'20px',fontSize:'20px'}}>personalinfo page</button>
    </div>
  )
}

export default AboutPage