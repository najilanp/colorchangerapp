import React from 'react'
import { useState } from 'react'

function BckgroundColorchanger() {
    const[backgroundcolor,setBachgroundcolor]=useState('white')
    const changebgcolor=(color)=>{
      setBachgroundcolor(color)
    }
  return (
     <div style={{width:'100%',height:'100vh',backgroundColor:backgroundcolor}} className='d-flex flex-column justify-content-center align-items-center'> 
     <h1 className='mb-5'>Background Color Changer App</h1>
        <div className='p-5 rounded' style={{backgroundColor:'rgb(211, 173, 126)'}}>
             <button onClick={()=>changebgcolor('aqua')}  className='btn pe-4 ps-4' style={{backgroundColor:'aqua' }}>aqua</button>
             <button  onClick={()=>changebgcolor('blueviolet')}  className='btn ms-3 pe-4 ps-4' style={{backgroundColor:'blueviolet' }}>blueviolet</button>
             <button  onClick={()=>changebgcolor('green')}  className='btn ms-3 pe-4 ps-4' style={{backgroundColor:'green' }}>green</button>

             <button  onClick={()=>changebgcolor('brown')}  className='btn ms-3 pe-4 ps-4' style={{backgroundColor:'brown' }}>brown</button>
        </div>
    </div>   
  )
}

export default BckgroundColorchanger