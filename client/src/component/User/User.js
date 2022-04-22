import React, { useEffect, useState } from 'react';

const User = () => {
const [users,setUser]=useState([])
useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])
const handleFormSubmit = (event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
     const user = {name, email}
    //   console.log(user)
   
fetch('http://localhost:5000/user', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
      const newUser= [...users, data]
      setUser(newUser)
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
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
                    users.map(user=> <li key={user.id}>name:{user.name},id:{user.id}</li>)
                }
            </ul>
        </div>
    );
};

export default User;