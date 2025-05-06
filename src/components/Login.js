import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignin,setIsSignin]=useState(true)

  const signinToggle =()=>
  {
    setIsSignin(!isSignin)
  }
  return (
    <div>
    <div>
     <Header/>
    </div>
    <div className='absolute'>
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_medium.jpg" 
alt="logo"/>
    </div>
    <div className=''>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignin? "Sign In":"Sign Up"}</h1>
            {!isSignin &&<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
            <input type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignin? "Sign In":"Sign Up"}</button>
            <p className='cursor-pointer' onClick={signinToggle}>{isSignin? "New to netflix? Sign up now":"Already registerd! Please Login Now"}</p>
        </form>
    </div>
    </div>
  )
}

export default Login
