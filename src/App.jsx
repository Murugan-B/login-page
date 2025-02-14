import { useState } from "react";
import "./App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const correctPassword = "12345678";

  const handleLogin = () => {
    if (password === correctPassword) {
      alert("Login successful");
      window.location.href = "https://murugan-b.github.io/travel-landing-page/";
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-box"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-box"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}
