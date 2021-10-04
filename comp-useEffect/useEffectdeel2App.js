import React, { useState,useEffect} from "react"


export default function App() {

  const[windowWith,setwindowWith]= useState(window.innerWidth)
 
  const handleResize  = (e) => {
    setwindowWith(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize",handleResize)

    return ()=>{
     window.removeEventListener("resize",handleResize)
    
    }
  },[])

 
    
    return (
      
      <div>{windowWith}</div>


        
     
      
    )
}
