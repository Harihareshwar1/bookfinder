
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AuthProvider from "./AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
