import React from 'react'
import Sidebar from "../components/Common/Sidebar"
import Feed from '../components/Common/Feed';
const Home = () => {
  return (
     <div className=' w-full flex flex-row max-sm:flex-col  h-[calc(100vh-5rem)] '>
    <section className='  max-lg:h-full  lg:w-[20%]'>
      <Sidebar/>
    </section>
    <section className=' w-[100%] md:w-[80%] h-full lg:w-[80%]'>
       <Feed/>
    </section>
     </div>
  )
}

export default Home;