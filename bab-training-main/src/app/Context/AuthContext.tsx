import React, { useContext, useEffect, useReducer, useState } from "react";
// import { IAuthContextState } from '../../Types/AuthTypes';
import { HttpClient } from "../Api/HTTPClient";
import { getToken } from "../Hooks/useToken";
import reducer from "../Reducers/AuthReducer";
import { AUTH_USER_FAILED, AUTH_USER_SUCCESS } from "../Api/Constant";
import { IAuthContextState } from "../../Types/AuthTypes";

const initialState: IAuthContextState = {
  user: {
    avatar: "",
    designation: "",
    email: "",
    id: 0,
    name: "",
    phone: "",
    status: "",
    user_member_id: 0,
  },
};
const AuthContext = React.createContext(initialState);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (token) {
        setIsLoading(true);
        try {
          const { data }: any = await HttpClient.get("/trainee/profile");

          dispatch({
            type: AUTH_USER_SUCCESS,
            payload: data,
          });
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          dispatch({ type: AUTH_USER_FAILED });
        }
      } else {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, isLoading, setIsLoading, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
