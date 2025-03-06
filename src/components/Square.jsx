import React, { useState } from 'react'

function Square({value, onHandleClick}) {

    // const [square, setSquare] = useState("_");

    

    // function handleClick(){
    //         console.log("")
        
    
    // }

  return (
    <button className='square' onClick={onHandleClick}>{value}</button>
  )
}

export default Square