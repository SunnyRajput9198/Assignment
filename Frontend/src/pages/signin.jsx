import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState(null);
    async function getData() {
  const url = "http://localhost:3000/api/auth/signin";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();

if (!response.ok) {
    setMessage(result.message);
    setUser(null);
    return;
}

setMessage(result.message);
setUser(result.user);

  } catch (error) {
    console.error(error.message);
  }
}
    function submit(a){
        a.preventDefault();
        getData();
    }
    return(
<form className="auth-container" onSubmit={submit}>
    <h1 className="auth-title">Sign In Page</h1>
    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    <button type="submit">Sign In</button>
    {message && <p>{message}</p>}
    {user && (
    <div>
        <h3>Welcome, {user.username}!</h3>
    </div>
)}
    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
</form>
    );
}