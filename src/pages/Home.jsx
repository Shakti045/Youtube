import React from 'react'
import Sidebar from "../components/Common/Sidebar"
import Feed from '../components/Common/Feed';
const Home = () => {
  return (
     <div className=' w-full flex h-[calc(100vh-5rem)] '>
    <section className=' h-full  w-[20%]'>
      <Sidebar/>
    </section>
    <section className=' h-full w-[80%]'>
       <Feed/>
    </section>
     </div>
  )
}

export default Home;