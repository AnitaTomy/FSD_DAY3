import { Button, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Buttonload = () => {
  var [users, setUsers] = useState([]);

  const loadData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br /><br />
      <Button variant='contained' onClick={loadData}>LOAD DATA</Button>
    </div>
  );
}

export default Buttonload;
