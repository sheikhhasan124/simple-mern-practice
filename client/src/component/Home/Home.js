import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers]=useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/user')
       .then(res=>res.json())
       .then(data=>setUsers(data))
    },[])
    const handleDelete=(id)=>{
        // const proceed = window.confirm('are u sure to delete');
        
            console.log(id)
            const url = `http://localhost:5000/user/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    const remaining = users.filter(user=> user._id !== id)
                    setUsers(remaining)
                }
            })
        
    }
    return (
        <div>
            <h2>home</h2>
            <h3>user : {users.length}</h3>
            <ul>{users.map(user=><li key={user._id}>{user.name}
             <button onClick={()=>handleDelete(user._id)}>delete</button>
            </li>)}</ul>
        </div>
    );
};

export default Home;