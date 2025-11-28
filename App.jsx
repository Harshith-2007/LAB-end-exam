// Dashboard.js
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>Student Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
