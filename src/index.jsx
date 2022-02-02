import React from 'react';
import ReactDOM from 'react-dom';
const Element=()=>{
  return(
    <div>
      <h1>explaing about rendering methods </h1>
      <button onClick={activeLasers}>ckick me</button>
    </div>
  )
  }
  ReactDOM.render(<Element/>,document.getElementById("root"));
