import { useState } from "react";

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogIn = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return [isLoggedIn, toggleLogIn];
};

export default useLogin;
