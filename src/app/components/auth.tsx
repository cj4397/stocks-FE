'use client';

import { useMemo, createContext, useContext } from "react";
import { redirect } from "next/navigation";


import useLocalStorage from "./storage";

const initialState = {
    name: '',
    token: '',
    login: (name: string, token: string) => { },
    logout: () => { },
};


const AuthContext = createContext(initialState);


export const useAuth = () => {
    return useContext(AuthContext);
};


export default function Auth(props: {
    children: React.ReactNode
}) {
    const [token, setToken] = useLocalStorage("Token", '');
    const [name, setName] = useLocalStorage("Name", '');




    const login = (name: string, token: string) => {
        setName(name)
        setToken(token)
    }

    const logout = () => {

        setToken('');
        setName('');
        redirect('/')
    };


    const value = useMemo(
        () => ({
            name,
            token,
            login,
            logout,
        }),
        [token]
    );

    return <AuthContext.Provider value={value}> {props.children}</AuthContext.Provider>
}