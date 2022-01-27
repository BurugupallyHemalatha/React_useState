import React,{useState,useEffect} from 'react'
const TitleHook =()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>clicked </button>
            <h1>useEffect clicks{count}</h1>
        </div>
    )
}
export default TitleHook