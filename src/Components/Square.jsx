import React from 'react'

const Square = (props) => { 
  return (
    <div onClick={props.click}
    style={{
      border:"1px solid",
      height:"100px",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <h2>{props.value}</h2>
    </div>
  )
}

export default Square