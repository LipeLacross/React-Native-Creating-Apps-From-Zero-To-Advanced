import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextData = {
  signed: boolean;
  user: User | null;
  loadingAuth: boolean;
  loading: boolean;
  signUp: (email: string, password: string, nome: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>({
  signed: false,
  user: null,
  loadingAuth: false,
  loading: true,
  signUp: async () => false,
  signIn: async () => {},
  signOut: async () => {},
});

function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('@finToken');

      if(storageUser){

        const response = await api.get('/me', {
          headers:{
            Authorization: `Bearer ${storageUser}`
          }
        })
        .catch(()=>{
          setUser(null);
          return null;
        });

        api.defaults.headers.Authorization = `Bearer ${storageUser}`;
        setUser(response?.data ?? null);
      }

      setLoading(false);
    }

    loadStorage();
  }, [])


  async function signUp(email: string, password: string, nome: string){
    setLoadingAuth(true);

    try{
      await api.post('/users', {
       name: nome,
       password: password,
       email: email,
      })

      setLoadingAuth(false);
      return true;
    }catch(err){
      console.log("ERRO AO CADASTRAR", err);
      setLoadingAuth(false);
      return false;
    }
  }

  async function signIn(email: string, password: string){
    setLoadingAuth(true);

    try{
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      const { id, name, token } = response.data;

      await AsyncStorage.setItem('@finToken', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      })

      setLoadingAuth(false);

    }catch(err){
      console.log("ERRO AO LOGAR ", err);
      setLoadingAuth(false);
    }

  }


  async function signOut(){
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    })
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
