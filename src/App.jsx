import React, {useState} from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import About from './Components/About'
import Items from './Components/Items'
const App =()=>{
  const [count, setCount]=useState(0)
return(
  <div class="Container text-center  bg-success">
    <h1 style={{color:"red"}}>MY REACT PROJECT </h1>
    <div>
    <Header />
    <Items/>
    <hr/>
    <About />
    <h2 class="text-danger">Hema{count}</h2>
    <button class="btn-primary"onClick={()=>setCount(count+1)}>Hema</button>

    <hr/>
    <Footer />
    </div>

  </div>
)
}
export default App