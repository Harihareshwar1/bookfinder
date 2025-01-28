import  { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import BookSearch from "./BookSearch";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="home-container">
      <h1>Welcome, {user.name}!</h1>
      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
      <BookSearch />
    </div>
  );
};

export default Home;
