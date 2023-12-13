import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Todoapi = () => {
    var [value,setValue]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            console.log(res.data)
            setValue(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <TableContainer>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>TITLE</TableCell>
                    <TableCell>COMPLETED</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {value.map((user,index)=>(
                    <TableRow>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.title}</TableCell>
                        <TableCell>{user.completed.toString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableContainer>
    </div>
  )
}

export default Todoapi