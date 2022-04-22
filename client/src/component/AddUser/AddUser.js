import React from 'react';

const AddUser = () => {
    const handleAdduser=(event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
         const user = {name, email};

        //  send data to the server
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            alert('user make succeessfully')
            event.target.reset();
        })
    }
    return (
        <div>
            <h3>add user</h3>
            <form onSubmit={handleAdduser}>
                <input type="text" name='name' placeholder='name' required/>
                <input type="email" name="email" id="" placeholder='email' required />
                <input type="submit" value="add user" />
            </form>
        </div>
    );
};

export default AddUser;