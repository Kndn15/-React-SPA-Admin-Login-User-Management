import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Registration = () => {
    const name = useRef();
    const username = useRef();
    const phone = useRef();
    const email = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {
            // Generate a random unique ID for the new user
            id: Math.floor(Math.random() * 1000000000),
            name: name.current.value,
            username: username.current.value,
            phone: phone.current.value,
            email: email.current.value,
        };
        axios.post('https://jsonplaceholder.typicode.com/users', newUser)
            .then(res => {
                alert('User added successfully');
                // Pass the new user to the dashboard via navigation state
                navigate('/dashboard', { state: { newUser } });
            })
            .catch(error => alert(error.message));
    };

    return (
        <>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" placeholder='Enter name here' ref={name} required /> <br /><br />
                Username: <input type="text" placeholder='Enter username here' ref={username} required /> <br /><br />
                Phone: <input type="tel" placeholder='Enter phone number' ref={phone} required /> <br /><br />
                Email: <input type="email" placeholder='Enter email here' ref={email} required /> <br /><br />
                <button type='submit' className='btn btn-success'>Submit Form</button>
            </form>
        </>
    );
}

export default Registration;
