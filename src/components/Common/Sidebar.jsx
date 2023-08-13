import React from "react"
import { categories } from "../../utils/SideBarLinks"
import { useContext } from "react"
import { Appcontext } from "../../context/Appcontext";
const Sidebar = () => {
  const {keyword,setkeyword}=useContext(Appcontext);
  return (
     <div className=" bg-richblack-900 sidebar overflow-y-scroll flex flex-col gap-4 text-lg text-white font-bold w-full h-full  ">
        {
          categories.map((e,index)=>{
            return (
              <div onClick={()=>setkeyword(e.name)}  key={index} className={` cursor-pointer ${keyword===e.name && "bg-richblue-600 "}   p-4 rounded-md flex gap-2 items-center`}>
                <div>{e.icon}</div>
                <div>{e.name}</div>
              </div>
            )
          })
        }
     </div>
  )
}

export default Sidebar