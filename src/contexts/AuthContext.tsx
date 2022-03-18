import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apiClient";

type User = {
  name: string;
  email: string;
}

type AuthResponse = {
  token: string;
  refresh_token: string;

  user: User;
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, 'devshare.token');
  destroyCookie(undefined, 'devshare.refresh_token');

  authChannel.postMessage('signOut');

  Router.push('/');
}

type AuthProviderProps = {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = (message) => {
      switch(message.data) {
        case 'signOut':
          signOut();
          break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    const { 'devshare.token': token } = parseCookies();
    
    if(token) {
      api.get("users/me").then(response => {
        const { email, name } = response.data;
        setUser({ email, name });
      }).catch((err) => {
        signOut();
      })
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("users/session", {
        email,
        password
      });

      const { token, refresh_token, user } = response.data as AuthResponse;

      setCookie(undefined, 'devshare.token', token, {
        maxAge: 60 * 60 * 24 * 30, //30 dias
        path: '/'
      });

      setCookie(undefined, 'devshare.refresh_token', refresh_token, {
        maxAge: 60 * 60 * 24 * 30, //30 dias
        path: '/'
      });

      setUser(user);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push('/home');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
