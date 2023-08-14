import React from "react"
import { categories } from "../../utils/SideBarLinks"
import { useContext } from "react"
import { Appcontext } from "../../context/Appcontext";
const Sidebar = () => {
  const {keyword,setkeyword}=useContext(Appcontext);
  return (
     <div className=" max-sm:hidden bg-richblack-900 sidebar overflow-y-scroll flex flex-col
      max-sm:flex-row gap-4 text-lg text-white font-bold w-full h-full pt-8  ">
        {
          categories.map((e,index)=>{
            return (
              <div onClick={()=>setkeyword(e.name)}  key={index} className={` 
               max-sm:h-fit max:sm:w-fit cursor-pointer ${keyword===e.name && "bg-richblue-600 "}   p-4 rounded-md flex gap-4 items-center`}>
                <div >{e.icon}</div>
                <div className=" max-sm:hidden">{e.name}</div>
              </div>
            )
          })
        }
     </div>
  )
}

export default Sidebar