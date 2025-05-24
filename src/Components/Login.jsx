import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    let username=useRef(null);
    let userpassword=useRef(null);
    let navigate=useNavigate();
   const handleSubmit=(e)=>{
    // e.preventDefault();
    if(username.current.value=='admin' && userpassword.current.value=='admin@123'){
        navigate('/dashboard')
    }else{
        alert('Invalid credentials please enter again')
    }
   } 
  return (
    <>
        <h2>Login Here</h2> <br />
        <form onSubmit={handleSubmit}>
            Username: <input type="text" placeholder='enter username' ref={username} required/>
            <br /><br />
            Password: <input type="password" placeholder='enter password'ref={userpassword} required />
            <br /><br />
            <button type="submit" value={"Login"} className='btn btn-outline-primary'>Submit</button>
        </form>
        
    </>
    
  )
}

export default Login