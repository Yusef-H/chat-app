
export const postRequest = async (url, body) => {
    console.log(body);
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
    });

    const data = await res.json();

    if (!res.ok) {
        let message;

        if (data.message != null) {
            message = data.message;
        }
        else {
            message = data;
        }

        return { errorOccurred: true, message };
    }
    return data;

}

export const getRequest = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        let message = "fetch error";
        if (data?.message) {
            message = data.message;
        }

        return { errorOccurred: true, message };
    }

}

export const baseUrl = "http://localhost:3000";