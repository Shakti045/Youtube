import React, { useState } from 'react'
import logo from "../../assets/youtube_logo_dark.webp"
import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [value,setvalue]=useState('');
  const navigate=useNavigate();
  function submithandler(event){
    event.preventDefault()
    setvalue('')
    navigate(`/search/${value}`)
  }
  return (
     <nav className=' flex justify-between px-10 w-full bg-black  h-20'>
     <Link to="/">
     <img src={logo} alt='youtubelogo' className=' h-20'></img>
     </Link>
     <form onSubmit={submithandler} className=' my-auto bg-richblack-700 p-3  w-[500px]  rounded-md outline-none text-white flex justify-center items-center h-11'>
     <input onChange={(e)=>{
      setvalue(e.target.value)
     }} value={value} placeholder='Search for anything' spellCheck={false} className='  bg-transparent w-full outline-none h-full ' type='text'></input>
     <FiSearch/>

     </form>
     <Link to="/">
     <img src={logo} alt='youtubelogo' className=' h-20'></img>
     </Link>
     </nav>
  )
}

export default Navbar