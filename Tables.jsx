import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Tables = () => {
  var [users, setUsers] = useState([]);
  var [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div>
        {loading?<CircularProgress color='primary'/>:<TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </div>
  );
};

export default Tables;
