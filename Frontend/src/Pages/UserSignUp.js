import classes from "../components/MainHeader/MainHeader.module.css";
import Signup from "../components/Signup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserSignUp = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const userAlert = () => {
    Swal.fire({
      text: "Account created successfully",
      icon: "success",
      confirmButtonText: "Continue to Login",
    }).then(() => {
      navigate("/user/login");
    });
  };

  const addUserHandler = (userData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, userData)
      .then((result) => {
        if (result.status === 200) {
          userAlert();
        } else {
          navigate("");
        }
      }).catch(error => {
        setError(error.response.data);
      })
  };

  return (
    <>
      <header className={classes["main-header"]}>
        <h3>User Sign Up</h3>
      </header>
      <Signup error={error?.message} addUser={addUserHandler} />
    </>
  );
};

export default UserSignUp;
