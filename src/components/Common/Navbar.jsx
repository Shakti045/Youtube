import React, { useState } from 'react'
// import logo from "../../assets/YouTube_Logo_2017.svg.png"
import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const location=useLocation();
  const [value,setvalue]=useState('');
  const navigate=useNavigate();
  function submithandler(event){
    event.preventDefault()
    setvalue('')
    navigate(`/search/${value}`)
  }
  return (
     <nav className={`flex max-sm:flex-col max-sm:gap-2 max-sm:mt-1  justify-between px-10 w-full ${location.pathname==="/"?" bg-richblack-900":" max-sm:hidden bg-black"}  max-sm:h-fit    h-20'`}>
     <Link to="/">
      <div className=' lg:h-20 flex justify-center gap-4 items-center'>
      <img src="https://i.ibb.co/s9Qys2j/logo.png" alt='youtubelogo' className=' h-11  '></img>
      <h1 className=' text-white font-bold text-2xl'>YOUTUBE</h1>
      </div>
     </Link>
     <form onSubmit={submithandler} className=' my-auto bg-richblack-700 p-3  lg:w-[500px]  rounded-md outline-none text-white flex justify-center items-center h-11'>
     <input onChange={(e)=>{
      setvalue(e.target.value)
     }} value={value} placeholder='Search for anything' spellCheck={false} className='  bg-transparent w-full outline-none h-full ' type='text'></input>
     <FiSearch/>

     </form>
     <Link to="/">
     {/* <img src={logo} alt='youtubelogo' className=' h-20'></img> */}
     </Link>
     </nav>
  )
}

export default Navbar