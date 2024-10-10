import React, { useState, useEffect } from 'react';
import Msg from './Msg';

function Login ({ onLogin}) {
    /* const [data, setData] = useState({
        username: "",
        password: ""
    }); */
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) 
            .then(setUsers);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
       /*  const VerifiedUsername = '';
        const VerifiedPassword = ''; */

        const userFound = users.find(
            (user) => user.email === username && user.username === password
        );

        if (userFound) {
            onLogin(userFound);
        } else {
            setMsg('Login error --> Username or password incorrect');
        }
    };

    return <div>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>User:</label>
                <input type="text" id="username" value= {username} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="text" id="password" value= {password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>
        {msg ? <Msg message={msg} /> : null}
    </div>
    
}
export default Login;