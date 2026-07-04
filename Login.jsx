import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function login() {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  }

  return (
    <div>
      <h1>Login</h1>

      <input type="email" placeholder="Email" />

      <br /><br />

      <input type="password" placeholder="Password" />

      <br /><br />

      <button onClick={login}>Sign In</button>
    </div>
  );
}