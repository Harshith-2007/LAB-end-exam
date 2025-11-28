import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === "student" && pass === "1234") {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        /><br/><br/>
        <input 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
