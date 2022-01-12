import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from './Grid/Grid';

const MainGrid = () => {
    const [users, setUsers] = useState([]);
    const Headers = ['Username', 'Age'];

    /*
     * Get all users
     */
    useEffect(() => {
      axios.get("/users").then(res => {
        // console.log(res.data);
        setUsers(res.data);
      });
    }, [])

    return (
      <div className="container">
        <h1>All Users</h1>
        <p>Users and their age</p>
        <Grid data={users} header={Headers}/>
      </div>
    )
}

export default MainGrid
