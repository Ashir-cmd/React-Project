import { useState } from "react"

export default function HomePage()
{   
    const [count,setCount]= useState(0);
    return(
        <>
        <h1>Home</h1>
        <button onClick={()=>setCount(count+1)}>count {count}</button>
        
        </>
    )
}