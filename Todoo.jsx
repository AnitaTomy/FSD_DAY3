import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todoo = () => {
  const [names,setNames]=useState()
  const [data,setData]=useState([])
  const inputHandler=(e)=>{
    setNames(e.target.value)
  }
  const addHandler=()=>{
    setData((data=>[...data,names]))
    setNames('')
  }
  return (
    <div>
        <TextField variant='standard' placeholder='Enter a number' onChange={inputHandler}/><br /><br />
        <Button variant='contained' onClick={addHandler}>ADD</Button>
        <ul>
          {data.map((value,index)=>{
            return(
              <li>{value}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default Todoo