import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../SlicePage/UsersSlice';

const ContectPage = () => {
  const dispatch=useDispatch();
  const users = useSelector((state) => state.userInfo.users);
  console.log(users);
  function Deletefun(index) {
    dispatch(deleteUser(index));
  }
  return (
    <div>
      <h1 style={{display:'flex',justifyContent:'center',textAlign:'center',fontSize:'120px',color:'black'}}>ContactPage</h1> 
      <h1>{users?.map((user,index)=>{
        return(
          <div key={index}>
              <h1>Name : {user.name}</h1>
              <h2>Age : {user.age}</h2>
              <h2>Email : {user.email}</h2>
              <h2>Contact : {user.contact}</h2>
              <h2>Password : {user.password}</h2>
              <button style={{padding:'20px 40px',marginLeft:'100px',backgroundColor:'blue',fontWeight:'bold',color:'white',borderRadius:'20px',fontSize:'50px',cursor:'pointer'}}onClick={()=>Deletefun(index)}>delete</button>
              <hr style={{width:'1000px',height:'5px',backgroundColor:'black'}}/>
          </div>
        )
      })}</h1>
      </div>
  )
}

export default ContectPage