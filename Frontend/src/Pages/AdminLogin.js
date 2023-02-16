import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import classes from "../components/MainHeader/MainHeader.module.css";
import axios from "axios";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const adminLoginHandler = async (email, password) => {
    setError(null);
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/admin/login`, {
        email,
        password,
      })
      .then((res) => {
        // const { adminToken } = res.data;
        // console.log(adminToken); JWT FOR REDUX
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <>
      <header className={classes["main-header"]}>
        <h3>Admin Login</h3>
      </header>
      <Login error={error} logger={adminLoginHandler} />
    </>
  );
};

export default AdminLogin;
