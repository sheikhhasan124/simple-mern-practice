import React, { useEffect, useState } from 'react';

const User = () => {
const [users,setUser]=useState([])
useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])
const handleFormSubmit = (event)=>{
    const name = event.target.name.value;
    const email = event.target.email.value;
     const user = {name, email}
      
    fetch('http://localhost:5000/user',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=> console.log(data))
    event.preventDefault()
}
    return (
        <div>
            <h2>here user have {users.length}</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder='name' id="" />
                <input type="email" name="email" placeholder='email' id="" />
                <input type="submit" value="submit" />
            </form>
            <ul>
                {
                    users.map(user=> <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    );
};

export default User;