import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import classes from "../components/MainHeader/MainHeader.module.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const adminLoginHandler = (email, password) => {
    console.log(email, password);
    navigate("/");
  };

  return (
    <>
      <header className={classes["main-header"]}>
        <h3>Admin Login</h3>
      </header>
      <Login logger={adminLoginHandler}/>
    </>
  );
};

export default AdminLogin;
