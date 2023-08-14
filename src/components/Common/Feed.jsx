import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'
import Loader from './Loader';
import VideoCard from './VideoCard';
const Feed = () => {
    const {loading,keyword,getvideosfromkeyword}=useContext(Appcontext);
    const [videos,setvideos]=useState([]);
    
     async function getvideos(keyword){
        const data=await getvideosfromkeyword(keyword);
        setvideos(data);
     }
    useEffect(()=>{
      getvideos(keyword)
    },[keyword])
  return (
     <div className=' p-4  items-center   mx-auto flex flex-col lg:gap-5 relative w-full h-full '>
        {/* <h1 className=' flex gap-4 w-full ml-[80px]   justify-start text-white font-bold text-4xl font-mono '><span className=' text-pink-300'>{keyword}</span>  videos</h1> */}
         {
            loading?(
                <Loader/>
            ):(
             <div className='  h-full feed  overflow-y-scroll  grid grid-cols-3  max-sm:grid-cols-1   gap-4 p-2 '>
              {
                videos.length===0?(
                    <h1>No videos found</h1>
                ):(
                    <>
                     {
                        videos.map((video,index)=>{
                            return <VideoCard key={video?.videoId} {...video}/>
                        })
                     }
                    </>
                )
              }
             </div>
            )
         }
     </div>
  )
}

export default Feed;