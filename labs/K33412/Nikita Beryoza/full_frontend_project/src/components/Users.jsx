import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "./UI/Spinner/Spinner";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users');
                setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            } finally {
                setIsLoading(false)
            }
        }
        getUsers();
    }, [])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <Spinner isLoading={isLoading}>Нет пользователей для отображения</Spinner>
            }
        </article>
    );
};

export default Users;
