import React,{useState} from 'react'
const Header =()=>{
    const initial=0
    const[count,setCount]=useState(initial)
    return(
        <div class="text-red">
            <h1>Header Section </h1>
            <h2>Navbar{count}</h2>
            <form>
                <input type="button" value="RESET"onClick={()=>setCount(initial)}/><br/><br/>
                <input type="button"  value="INCREMENT" onClick={()=>setCount(count+1)}/><br/><br/>
                <input type="button" value ="DECREMENT" onClick={()=>setCount(count-1)}/><br/><br/>
            </form>
        </div>
    )
}
export default Header;