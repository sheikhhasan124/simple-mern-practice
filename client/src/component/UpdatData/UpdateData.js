import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateData = () => {
    const {id} = useParams()
    const [user, setUser]=useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
        })
    },[])
    const handleUpdateuser=(event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
         const updateuser = {name, email};

        //  send data to the server
        const url = `http://localhost:5000/user/${id}`
        fetch(url,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updateuser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            alert('user update make succeessfully')
            event.target.reset();
        })}
    return (
        <div>
            <h2>{user.name}</h2>
            <form onSubmit={handleUpdateuser}>
                <input type="text" name='name' placeholder='name' required/>
                <input type="email" name="email" id="" placeholder='email' required />
                <input type="submit" value="update user" />
            </form>
        </div>
    );
};

export default UpdateData;