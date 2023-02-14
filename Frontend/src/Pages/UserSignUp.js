import classes from "../components/MainHeader/MainHeader.module.css";
import Login from "../components/Login/Login";

const UserSignUp = () => {
  return (
    <>
      <header className={classes["main-header"]}>
        <h3>User Sign Up</h3>
      </header>
      <Login />
    </>
  );
};

export default UserSignUp;
