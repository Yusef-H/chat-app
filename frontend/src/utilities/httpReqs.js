
export const postRequest = async (url, body) => {
    console.log(url);
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body,
    });
    console.log(res);

    const data = await res.json();
    console.log(data);
    if(!res.ok){
        let message;

        if(data.message != null){
            message = data.message;
        }
        else{
            message = data;
        }

        return {errorOccurred: true, message};
    }


    return data;

}


export const baseUrl = "http://localhost:5173";