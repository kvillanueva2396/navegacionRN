import * as React from 'react';
import {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// definir como luce, que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  username: string | undefined;
  favoriteIcon: string | undefined;
}

// estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

//lo usaremos para decirle a React como luce y que expone el Context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeUsername: (username: string) => void;
  changeFavoriteIcon: (iconName: string) => void;
}

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeUsername,
        changeFavoriteIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
