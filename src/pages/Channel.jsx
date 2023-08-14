import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import VideoCard from '../components/Common/VideoCard';
import { options } from '../utils/Api';
const Channel = () => {
  const location=useLocation();
  const channelid=location.pathname.split("/").at(-1);
  const [channeldata,setchanneldata]=useState([]);

  async function getchanneldata(channelid){
    console.log("Called")
   try{
    const result=await fetch(`https://youtube-v3-alternative.p.rapidapi.com/channel?id=${channelid}`,options)
    const data=await result.json();
    console.log(data)
    setchanneldata(data.data);
   }catch(err){
    console.log("Error while fetching channel data","=>",err)
   }
  }

  useEffect(()=>{
    getchanneldata(channelid)
  },[location])
  return (
    <div className='  p-4 flex flex-col gap-4  w-full h-[calc(100vh-5rem)] overflow-y-scroll feed text-white'>
      <div  className=' w-full grid grid-cols-3 max-sm:grid-cols-1 gap-4'>
         {
          channeldata?.map((video,index)=>{
            return <VideoCard key={index} {...video}/>
          })
         }
      </div>
    </div>
  )
}

export default Channel;