


export function useDatabase() {


    const fetchApi = async (url: string, method: string, body?: any) => {
        const headers = {
            "Content-Type": "application/json"
        };

        const options: RequestInit = {
            method,
            headers,
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);
        return response.json();
    };

    const sign_up = async (name: string, email: string, password: string) => {
        const url = `${process.env.NEXT_PUBLIC_DB_CHECK_USER}`;
        const method = "POST";
        const body = {
            name: name,
            email: email,
            password: password
        };

        return fetchApi(url, method, body);
    };


    const sign_in = async (email: string, password: string) => {
        const result = await fetch(`${process.env.NEXT_PUBLIC_DB_LOGIN}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        });
        const data = await result.json();
        if (result.ok) {
            return data
        } else {
            return false
        }
    }

    return {

        sign_up,
        sign_in
    };
}