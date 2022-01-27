import React,{useState} from 'react'
const Items =()=>{
    const[items,setItems]=useState([])
    const addItem =()=>{       
            setItems([...items,{
                id:items.length,
                values:Math.floor(Math.random()*10)+1
            }])        
    }
    return(
        <div>
           <input type="button" value="items" style={{color:"red"}} onClick={addItem}/>
           <ul>
             {items.map(item=>(
                 <li  key={item.id}>{item.values}</li>
             ))}
           </ul>
        </div>
    )
}
export default Items;