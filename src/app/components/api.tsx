


export function useDatabase() {


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

    const market = async () => {
        const url = `${process.env.NEXT_PUBLIC_DB_MARKET}`;
        const method = "GET";

        return fetchApi(url, method);
    }



    return {
        market,
        sign_up,
        sign_in
    };
}