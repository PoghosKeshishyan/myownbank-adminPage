import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import axios from './axios';

export function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadingData();
    }, [])

    async function loadingData() {
        const response = await axios.get('api/auth');
        setUsers(response.data);
        setLoading(false);
    }

    const deleteUser = async (id) => {
        let query = window.confirm('Are you sure you want to delete this account?');

        if (query) {
            await axios.delete(`api/auth/delete/user/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(() => {
                alert('User deleted');
                loadingData();
            })
        }
    }

    return (
        <div className='Users'>
            {loading && <Loading />}

            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><i className={user.avatar} /></td>
                                <td>
                                    <button onClick={() => deleteUser(user._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
