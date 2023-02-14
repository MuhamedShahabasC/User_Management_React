import { useState } from "react";

const useInput = (validatorFunction) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueIsValid = validatorFunction(enteredValue);
  const hasError = !valueIsValid && enteredValue !== '';
  
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const reset  = () => {
    setEnteredValue('')
  }

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    reset
  };
};

export default useInput;
