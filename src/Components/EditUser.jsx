import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        phone: '',
        email: ''
    });
    const [isFetch, setIsFetch] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                setUser({
                    name: res.data.name,
                    username: res.data.username,
                    phone: res.data.phone,
                    email: res.data.email
                });
                setIsFetch(true);
            })
            .catch((err) => console.log(err));
    }, [id]);

    // Input change handler
    const handleEdit = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
            .then((res) => {
                alert('Updated successfully');
                // Pass updated user to dashboard via navigation state
                navigate('/dashboard', { state: { updatedUser: { ...user, id } } });
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            {isFetch && (
                <>
                    <h2>Edit user with ID: {id}</h2>
                    <form onSubmit={handleSubmit}>
                        Name: <input
                            type="text"
                            placeholder='enter updated name here'
                            name="name"
                            value={user.name}
                            onChange={handleEdit}
                            required
                        />
                        <br /><br />
                        Username: <input
                            type="text"
                            placeholder='enter updated username here'
                            name="username"
                            value={user.username}
                            onChange={handleEdit}
                            required
                        />
                        <br /><br />
                        Phone: <input
                            type="tel"
                            placeholder='enter updated phone no.'
                            name="phone"
                            value={user.phone}
                            onChange={handleEdit}
                            required
                        />
                        <br /><br />
                        Email: <input
                            type="email"
                            placeholder='enter updated email here'
                            name="email"
                            value={user.email}
                            onChange={handleEdit}
                            required
                        />
                        <br /><br />
                        <button type="submit" className='btn btn-outline-primary'>Confirm Edit</button>
                    </form>
                </>
            )}
        </>
    );
}

export default EditUser
