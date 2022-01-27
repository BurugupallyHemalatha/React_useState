import React,{useState} from 'react'
const About =()=>{
 const [name,setName]=useState({firstName:"",secondName:"",CollegeName:""})
    return(
        <div>
            <form>
           
               <h1 style={{color:'orange'}}>THIRD HOOK COUNTER</h1>
               <input type="text"value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
               <input type="text" value={name.secondName}onChange={e=>setName({...name,secondName:e.target.value})}/>
               <input type="text " value={name.CollegeName} onChange={e=>setName({...name,CollegeName:e.target.value})}/>
               <h2>my first Name {name.firstName}</h2>
               <h2>second name {name.secondName}</h2>
               <h2>college name {name.CollegeName}</h2>
               {/*<h2>{JSON.stringyfy(name)}</h2>*===to identyfy mistake*/}
          
            </form>
        </div>
    )
}
export default About;