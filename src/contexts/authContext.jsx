import { createContext, useReducer } from "react";

export const AuthContext = createContext({});

export const authActions = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

const authReducer = (prevState, action) => {
  switch (action.type) {
    case authActions.SIGN_IN:
      return {
        ...prevState,
        isLoggedIn: true,
        isAdmin: true,
      };
    case authActions.SIGN_OUT:
      return {
        ...prevState,
        isLoggedIn: false,
        isAdmin: false,
      };
    default:
      return {
        ...prevState,
      };
  }
};

const defaultState = {
  isLoggedIn: false,
  isAdmin: false,
};

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, defaultState);

  const authMethods = {
    signIn: () => {
      dispatch({ type: authActions.SIGN_IN });
    },
    signOut: () => {
      dispatch({ type: authActions.SIGN_OUT });
    },
  };

  const authState = {
    user: { ...state },
    ...authMethods,
  };

  return (
    <AuthContext.Provider value={authState}>
      {props.children}
    </AuthContext.Provider>
  );
};
