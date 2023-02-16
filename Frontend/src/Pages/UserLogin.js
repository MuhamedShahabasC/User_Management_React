import { Link, useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import classes from "../components/MainHeader/MainHeader.module.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentUserActions } from "../store/current-user";
import Button from "../components/UI/Button/Button";

const UserLogin = () => {
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLoginHandler = (email, password) => {
    const enteredDetails = {
      email,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, enteredDetails)
      .then((res) => {
        const userData = { ...res.data.userData, token: res.data.token };
        localStorage.setItem("currentUser", JSON.stringify(userData));
        console.log("currentUser", userData);
        dispatch(currentUserActions.login(userData));
        navigate("/user/dashboard");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <>
      <header className={classes["main-header"]}>
        <h3>User Login</h3>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </header>
      <Login error={error?.message} logger={userLoginHandler} />
    </>
  );
};

export default UserLogin;
