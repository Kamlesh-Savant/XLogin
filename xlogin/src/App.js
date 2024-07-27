import './App.css';
import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMsg('');
    setSuccess(false);
    if(userName === "user" && password === "password"){
      setMsg('Welcome, user!');
      setSuccess(true);
    }
    else{
      setMsg('Invalid username or password');
    }

  }

  return (
    <div >
      <h1>Login Page</h1>
      <p>{msg}</p>
      { !success && 
      <form onSubmit={handleSubmit} >
        <div><label htmlFor="">Username:</label><input type="text" required value={userName} onChange={(e)=>{setUserName(e.target.value)}}/></div>
        <div><label htmlFor="">Password:</label><input type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
        <button type="submit">Submit</button>
      </form>
      }

    </div>
  );
}

export default App;
