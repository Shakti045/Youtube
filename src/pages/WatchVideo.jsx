// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router'
// import ReactPlayer from 'react-player';
// import { options } from '../utils/Api';
// import VideoCard from '../components/Common/VideoCard';
// const WatchVideo = () => {
//     const location=useLocation();
//     const [relatedvideos,setrelatedvideos]=useState([]);
//     const videoid=location.pathname.split("/").at(2)
//     const [videodetail,setvideodetail]=useState('');
//    async function getrelatedvideos(videoid){
//      try{
//       const result=await fetch(`https://youtube-v3-alternative.p.rapidapi.com/related?id=${videoid}`,options);
//       const {data}=await result.json();
//       console.log(data);
//       setrelatedvideos(data);
//      }catch(err){
//         console.log("Error while fetching related videos","=>",err) 
//      }
//    }
//    async function getvideodetails(videoid){
//     try{
//        const result=await fetch (`https://youtube-v3-alternative.p.rapidapi.com/video?id=${videoid}`,options);
//        const data=await result.json();
//        console.log(data);
//        setvideodetail(data);
//     }catch(err){
//       console.log("Error while fetching video details","=>",err)
//     }
//    }
//    useEffect(()=>{
//     getrelatedvideos(videoid)
//     getvideodetails(videoid);
//    },[videoid])
//   return (
//     <div className=' justify-between h-[calc(100vh-5rem)] w-[100vw] flex p-4 text-white'>

  
//       <div className='  h-full w-[40%] flex flex-col gap-3 text-white rounded-md p-4 border-[2px] border-b-0 border-richblack-700'>
//         <h1 className=' font-bold text-2xl'>Suggested videos</h1>
//          <div className=' h-full overflow-y-scroll feed  flex flex-col gap-3'>
//          {
//           relatedvideos.map((video,index)=>{
//             return <VideoCard  fromwatchpage={true} key={index} {...video}/>
//           })
//          }
//          </div>
//       </div>
//     </div>
//   )
// }

// export default WatchVideo

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import ReactPlayer from 'react-player';
import { options } from '../utils/Api';
import VideoCard from '../components/Common/VideoCard';
import millify from 'millify';
const WatchVideo = () => {
    const location=useLocation();
    const [relatedvideos,setrelatedvideos]=useState([]);
    const videoid=location.pathname.split("/").at(2)
    const [videodetail,setvideodetail]=useState('');
   async function getrelatedvideos(videoid){
     try{
      const result=await fetch(`https://youtube-v3-alternative.p.rapidapi.com/related?id=${videoid}`,options);
      const {data}=await result.json();
      console.log(data);
      setrelatedvideos(data);
     }catch(err){
        console.log("Error while fetching related videos","=>",err) 
     }
   }
   async function getvideodetails(videoid){
    try{
       const result=await fetch (`https://youtube-v3-alternative.p.rapidapi.com/video?id=${videoid}`,options);
       const data=await result.json();
       console.log(data);
       setvideodetail(data);
    }catch(err){
      console.log("Error while fetching video details","=>",err)
    }
   }
   useEffect(()=>{
    getrelatedvideos(videoid)
    getvideodetails(videoid);
   },[videoid])
  return (
    <div className=' overflow-y-scroll feed max-sm:h-fit justify-between h-[calc(100vh-5rem)] w-[100vw] flex
    max-sm:flex-col flex-row max-sm:p-2 p-4 text-white'>
   
       <div className=' max-sm:h-[60vh] max-sm:mx-auto   max-sm:w-[96vw] h-[calc(100vh-5rem)]  overflow-y-scroll feed w-[60%]  flex flex-col gap-2'>
       <ReactPlayer height={"100%"}  width={"100%"} playing controls url={`https://www.youtube.com/watch?v=${videoid}`}  />
       <div className=' max-sm:ml-0  ml-3 text-lg font-bold text-richblack-500'>
        <h1>{videodetail?.title}</h1>
        <h1>channelTitle:{videodetail?.channelTitle}</h1>
        <h1>{
                videodetail?.viewCount?(<h1>{millify(videodetail?.viewCount)} views</h1>):(
                   <button className=' text-sm bg-pink-400 rounded-md px-2  text-white'>Live</button>
                    )
              }   Uploaded on:{videodetail?.publishDate}</h1>
        {/* <h1>{videodetail?.description}</h1> */}
       </div>
       </div>


   
    <div className=' max-sm:h-fit max-sm:w-[100%] max-sm:border-0  h-full w-[40%] flex flex-col gap-3 text-white rounded-md max-sm:p-2 p-4 border-[2px] border-b-0 border-richblack-700'>
        <h1 className=' font-bold text-2xl'>Suggested videos</h1>
         <div className=' h-full overflow-y-scroll feed  flex flex-col gap-3'>
          {        relatedvideos.map((video,index)=>{
             return <VideoCard  fromwatchpage={true} key={index} {...video}/>
          })
         }
         </div>
      </div>
    </div>
   )
 }

export default WatchVideo;
