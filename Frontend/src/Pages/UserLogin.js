import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import classes from "../components/MainHeader/MainHeader.module.css";

const UserLogin = () => {
  const navigate = useNavigate()
  const userLoginHandler = (email,password) => {
    console.log(email,password)
    navigate('/')
  };

  return (
    <>
      <header className={classes["main-header"]}>
        <h3>User Login</h3>
      </header>
      <Login logger={userLoginHandler} />
    </>
  );
};

export default UserLogin;
