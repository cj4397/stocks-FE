
import { useAuth } from "./auth";

export function useDatabase() {
    const { token } = useAuth()
    console.log(token)

    const fetchApi = async (url: string, method: string, body?: any) => {
        const headers = {
            "Content-Type": "application/json"
        };

        let options: RequestInit = {
            method
        }

        if (method !== "GET") {
            options.headers = headers;
        }

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);
        return response.json();
    };

    const sign_up = async (name: string, email: string, password: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_SIGN_UP}`;
        const method = "POST";
        const body = {
            name: name,
            email: email,
            password: password
        };

        return fetchApi(url, method, body);
    };

    const sign_in = async (email: string, password: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_LOGIN}`;
        const method = "POST";
        const body = {
            email: email,
            password: password
        };

        return fetchApi(url, method, body);
    }

    const trader = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_TRADER}`;
        const method = "Post";
        const body = {
            token: token
        };

        return fetchApi(url, method, body);
    }

    const market = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_MARKET}`;
        const method = "GET";

        return fetchApi(url, method);
    }

    const application = async (nickname: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_REQUEST}`;
        const method = "POST";
        const body = {
            token: token,
            nickname: nickname
        };
        return fetchApi(url, method, body);
    }

    const admin = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_ADMIN}`;
        const method = "POST";
        const body = {
            token: token
        };

        return fetchApi(url, method, body);
    }

    const admin_confirm = async (nickname: string, email: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CONFIRM}`;
        const method = "PUT";
        const body = {
            nickname: nickname,
            email: email,
            token: token
        };

        return fetchApi(url, method, body);
    }

    return {
        trader,
        admin_confirm,
        admin,
        application,
        market,
        sign_up,
        sign_in
    };
}