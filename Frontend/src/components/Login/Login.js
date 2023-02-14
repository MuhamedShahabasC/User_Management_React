import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import useInput from "../../hooks/use-input";

const Login = (props) => {
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailInputHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordInputHandler,
    reset: resetPassword,
  } = useInput((value) => value.length > 8);

  const submitHandler = (event) => {
    event.preventDefault();
    props.logger(enteredEmail,enteredPassword)
    resetEmail();
    resetPassword();
    
  };

  const formIsValid = emailIsValid && passwordIsValid;

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          onChange={emailInputHandler}
          isValid={!emailHasError}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          onChange={passwordInputHandler}
          isValid={!passwordHasError}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
