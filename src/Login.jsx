import  { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>Book Finder App</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          login(credentialResponse);
          navigate("/home"); // Redirect to home page after login
        }}
        onError={() => console.log("Login Failed")}
      />
    </div>
  );
};

export default Login;
