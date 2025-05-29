import { signOut } from 'firebase/auth'
import React,{useEffect} from 'react'
import auth from '../utils/firebase'

import { useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'

import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constant'

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
   const dispatch= useDispatch()

const handleSignout=()=>
{
  signOut(auth).then(()=>
  {

  }).catch((error)=>{
navigate("/error")
  })
}

useEffect(()=>
  {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName} = user
        dispatch(addUser({uid: uid,email: email, displayName: displayName}))
       navigate("/browse")
  
      } else {
        dispatch(removeUser())
        navigate("/")
  
      }
    });
    return ()=> unsubscribe();
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

      <img className='w-44' src={LOGO}
      alt="logo"/>
     { user && <div className='flex'>
        <button className='font-bold text-white' onClick={handleSignout}>SIGN OUT</button>
      </div>}
    </div>
  )
}

export default Header
