import {useState} from 'react';

const useInput = () => {
  const [isInputValid, setisInputValid] = useState(false);

  const inputValidator = (value: string) => {
    if (value) {
      setisInputValid(true);
      return;
    }
    setisInputValid(false);
    return;
  };

  return {
    isInputValid,
    inputValidator,
  };
};

export default useInput;
