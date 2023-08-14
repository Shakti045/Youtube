import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';
import Loader from '../components/Common/Loader';
import VideoCard from '../components/Common/VideoCard';
import { useState } from 'react';
const Search = () => {
  const {loading,getvideosfromkeyword}=useContext(Appcontext);
  const [videos,setvideos]=useState([]);
  const location=useLocation();
  let keyword=location.pathname.split("/").at(-1)
  keyword=keyword.replace('%20',' ')
     async function getdata(keyword){
      const result=await getvideosfromkeyword(keyword);
      console.log(result)
      setvideos(result);
     }
  useEffect(()=>{
    getdata(keyword)
  },[keyword])
  return (
      <div className='  text-white  flex flex-col   gap-4 p-4 w-full h-[calc(100vh-5rem)]'>
         <h1 className=' flex gap-3 text-3xl font-mono '>Videos for <span className=' text-pink-400'>{keyword}</span></h1>
         <div className=' feed w-full  h-full overflow-y-scroll'>
           {
            loading?(
              <Loader/>
            ):(
              <div className=' feed  h-full feed  overflow-y-scroll max-sm:grid-cols-1  max-sm:pl-2  grid grid-cols-3   gap-4  '>
              {
                videos.length===0?(
                    <h1>No videos found</h1>
                ):(
                    <>
                     {
                        videos.map((video,index)=>{
                            return <VideoCard fromsearchpage={true} key={index} {...video}/>
                        })
                     }
                    </>
                )
              }
             </div>
            )
           }
         </div>
      </div>
 )
}

export default Search