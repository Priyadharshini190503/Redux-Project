import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addUser} from '../SlicePage/UsersSlice'
const HomePage = () => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState(
    {
      name: "",
      age: "",  
      email: "",
      contact: "",
      password: ""
    }
  )

  function updateFormDatafu(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,      
      [name]: value
    }))
  }
  console.log(formData) 

  function addUser1(e) {
    e.preventDefault();
    dispatch(addUser(formData));
  }

  return (
    <div >
      <h1 style={{display:'flex',justifyContent:'center',textAlign:'center',fontSize:'120px',color:'black'}}> Register Now</h1>
      <div className='form'>
        <form >
           <div className='form-group'>
           <label>Name :</label><br/>
           <input 
           name='name'
           className='input'
           type="text" 
           placeholder='Enter your name'
           onChange={updateFormDatafu}
           value={formData.name}
           /><br/>
           </div>
          
          <div className='form-group'>
          <label>Age :</label><br/>
          <input 
          name='age'
          className='input'
          type="Number" 
          placeholder='Enter your age'
          onChange={updateFormDatafu}
          value={formData.age}
          /><br/>
          </div>
          
          <div className='form-group'>
          <label>Email :</label><br/>
          <input 
          name='email'
          className='input'
          type="email" 
          placeholder='Enter your email'
          onChange={updateFormDatafu}
          value={formData.email}
          /><br/>
          </div>
          
          
          <div className='form-group'>
          <label>Contact :</label><br/>
          <input 
          name='contact'
          className='input'
          type="Number" 
          max={10}
          placeholder='Enter your number'
          onChange={updateFormDatafu}
          value={formData.contact}
          /><br/>
          </div>

          <div className='form-group'>
          <label>Password :</label><br/>
          <input 
          name='password'
          className='input'
          type="password" 
          placeholder='Enter your password'
          onChange={updateFormDatafu}
          value={formData.password}
          />
          <br/>
          </div>
           
          <div className='form-add'><button className='button' onClick={addUser1}>Add</button></div>
          
        </form>
      </div>
    </div>
  )
}

export default HomePage