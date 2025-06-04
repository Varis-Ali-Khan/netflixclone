import { signOut } from 'firebase/auth'
import React,{useEffect} from 'react'
import auth from '../utils/firebase'

import { useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'

import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
   const dispatch= useDispatch()
   const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)

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

const handleGptSearchClick =()=>
{
  dispatch(toggleGptSearchView())
}

const handleLanguageChange=(e)=>
{
dispatch(changeLanguage(e.target.value))
}
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

      <img className='w-44' src={LOGO}
      alt="logo"/>
     { user && <div className='flex'>
      {showGptSearch && <select className='p-2 m-4 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        
      </select>}
      <button className='py-2 px-4 mx-4 my-2 rounded-lg text-white bg-purple-800 ' onClick={handleGptSearchClick}>{showGptSearch ? "Home":"GPT Search"}</button>
        <button className='font-bold text-white' onClick={handleSignout}>SIGN OUT</button>
      </div>}
    </div>
  )
}

export default Header
