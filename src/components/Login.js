import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidata } from '../utils/validate'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {useNavigate} from "react-router-dom"
import auth from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const [isSignin,setIsSignin]=useState(true)
  const [errorMessage,setErrorMessage]=useState()
  const dispatch=useDispatch()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
    const navigate = useNavigate()


  const handleButtonClick=()=>
  {
   
   const message= checkValidata(email.current.value,password.current.value)
    
    setErrorMessage(message)
    if(message) return;
    if(!isSignin)
    {

      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
     const {uid,email,displayName} = auth.currentUser
           dispatch(addUser({uid: uid,email: email, displayName: displayName}))
      navigate("/browse")
    }).catch((error) => {
      setErrorMessage(error.message)
    });
      
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + errorMessage)
    
    // ..
  });

    }else
    {
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate("/browse")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + errorMessage)
      });
    }
  }

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
        <form onSubmit={(e)=>e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignin? "Sign In":"Sign Up"}</h1>
            {!isSignin &&<input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
            <input ref={email} type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <p className='text-red font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignin? "Sign In":"Sign Up"}</button>
            <p className='cursor-pointer' onClick={signinToggle}>{isSignin? "New to netflix? Sign up now":"Already registerd! Please Login Now"}</p>
        </form>
    </div>
    </div>
  )
}

export default Login
