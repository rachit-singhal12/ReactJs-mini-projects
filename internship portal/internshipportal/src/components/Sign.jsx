import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sign() {
  const [username, setUsername] = useState('rachit');
  const [email, setEmail] = useState('rs@gmail.com');
  const [password, setPassword] = useState('rachit123');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Signup successful!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Signup</button>
        </form>
        <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '10px' }}>Back to login</Link>
      </div>
    </div>
  );
}

export default Sign;
