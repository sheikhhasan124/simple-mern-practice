import React, { useEffect, useState } from 'react';

const User = () => {
const [user,setUser]=useState([])
useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])

    return (
        <div>
            <h2>here user have {user.length}</h2>
        </div>
    );
};

export default User;