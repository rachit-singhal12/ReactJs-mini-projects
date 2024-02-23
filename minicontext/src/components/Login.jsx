import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContent';

function Login() {

    const [username,setUsername] = useState(0)
    const [password,setPassword] = useState(0);

    const {setUser} = useContext(UserContext);
    const handlesubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login