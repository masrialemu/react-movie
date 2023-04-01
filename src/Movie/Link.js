import React, { useState } from 'react'
import Data from './Data'
import './Link.css'

function Link() {
  const [list,setList]=useState(Data)
  const [listx,setListx]=useState([])
  const Action=(es)=>{
    let Push=listx.push([...listx,{id:es}])
    setListx(Push)
    
    console.log(listx)
  }
  return (
    <div className='link'>
      <div className="links">
      <div className="Listx">
      
     {list.map((e)=> <div className="listx" key={e.id}>
      <div className="imgs">
      <img src={e.url} alt={e.title} />
      </div>
      <div className="nmx">
      <h3>{e.title}</h3>
      <h3>{e.year}</h3>
      </div>
      <div className="btn">
      <button onClick={()=>Action(e.id)}>Add to cart</button>
      </div>
      </div>)}
      
      </div>
      </div>
    </div>
  )
}

export default Link
