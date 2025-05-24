import axios from "axios";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';

const UsersDashboard = () => {
    const [users, setUsers] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, []);

   

    const handleDelete = async (id, username) => {
        if (window.confirm(`Are you sure to delete user "${username}"?`)) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUsers(users.filter((user) => user.id !== id));
                alert(`Deleted user: "${username}"`);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <h2>Welcome to Dashboard</h2>
            <Link to={'/dashboard/addUser'}>
                <button className='btn btn-info'>Add User</button>
            </Link>
            <div className="container mt-4">
                <h2>Users List</h2>
                <table className="table table-bordered table-striped custom-table">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User_Name</th>
                            <th>Phone_Number</th>
                            <th>Email</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/dashboard/edit/${user.id}`} className="btn btn-sm btn-warning me-2">
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id, user.username)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) :
        <tr>
            <td colSpan="7" className="text-center">Loading.</td>
        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UsersDashboard;
