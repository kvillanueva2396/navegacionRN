import * as React from 'react';
import {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

// definir como luce, que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  username: string | undefined;
}

// estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
};

//lo usaremos para decirle a React como luce y que expone el Context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
