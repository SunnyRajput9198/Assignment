
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    async function getData() {
        const url = "http://localhost:3000/api/auth/signup";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            const result = await response.json();

            if (!response.ok) {
                setMessage(result.message);
                return;
            }

            setMessage(result.message);

        } catch (error) {
            console.error(error.message);
        }
    }
    function submit(a) {
        a.preventDefault();
        getData();
    }
    return (
        <div className="auth-container">
            <form onSubmit={submit}>
                <h1 className="auth-title">Sign Up Page</h1>
                <input type="text" placeholder="Sunny" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="sunny@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Sunny9876" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
                {message && <p>{message}</p>}
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );

}
