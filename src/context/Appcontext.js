import { createContext, useEffect, useState } from "react";
import { options } from "../utils/Api";
export let Appcontext=createContext();

function Appcontextprovider({children}){
    const [loading,setloading]=useState(false);
    const [keyword,setkeyword]=useState('New')
    
    const getvideosfromkeyword=async (keyword)=>{
        setloading(true);
        try{
           const result=await fetch(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${keyword}&geo=IN&lang=hi`,options);
           const {data}=await result.json();
           return data;
        }catch(err){
          console.log("Error while fetching videos","=>",err)
        }finally{
            setloading(false);
        }
    }
    
    
    const values={
        setkeyword,
        keyword,
        loading,
        getvideosfromkeyword
    }

    return (
           <Appcontext.Provider value={values}>
                {children}
           </Appcontext.Provider>
         )
}


export default Appcontextprovider;