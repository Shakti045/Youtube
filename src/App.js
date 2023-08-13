import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Common/Navbar'
import Search from './pages/Search'
import WatchVideo from './pages/WatchVideo'
import Channel from './pages/Channel'
const App = () => {
  return (
     <section className=' overflow-hidden w-[100vw] h-[100vh] flex flex-col bg-black '>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/search/:query" element={<Search/>}></Route>
            <Route path="/watchvideo/:videoid" element={<WatchVideo/>}></Route>
            <Route path="/channel/:channelid" element={<Channel/>}></Route>
          </Routes>
        </main>
     </section>
  )
}

export default App