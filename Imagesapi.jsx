import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Imagesapi = () => {
    var [value,setValue]=useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users")
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
                    <TableCell>NODE ID</TableCell>
                    <TableCell>AVATAR URL</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {value.map((user,index)=>(
                    <TableRow>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.node_id}</TableCell>
                        <tablecell><img height={100px} src={user.avatar_url}/></tablecell>
                    </TableRow>
                ))}
            </TableBody>
        </TableContainer>
    </div>
  )
}

export default Imagesapi