'use client';

import { useMemo, createContext, useContext } from "react";




import useLocalStorage from "./storage";

const initialState = {
    traders: [],
    get_traders: (traders_list: any[]) => { },
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
    const [traders, setTraders] = useLocalStorage("Traders", '');




    const login = (name: string, token: string) => {
        setName(name)
        setToken(token)
    }

    const logout = () => {

        setToken('');
        setName('');
        setTraders('');
    };

    const get_traders = (traders_list: any[]) => {
        setTraders(traders_list)
    }



    const value = useMemo(
        () => ({
            traders,
            get_traders,
            name,
            token,
            login,
            logout,
        }),
        [token]
    );

    return <AuthContext.Provider value={value}> {props.children}</AuthContext.Provider>
}