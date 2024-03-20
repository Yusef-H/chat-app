import { createContext, useState } from "react";
import { baseUrl, postRequest } from "../utilities/httpReqs";


export const UserContext = createContext({});


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);



    const registerUser = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        const res = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

        setIsLoading(false);
        if (res.errorOccurred) {
            setError(res.message);
        }

        setUser(res);
        localStorage.setItem("User", JSON.stringify(res));
    }


    return <UserContext.Provider value={{
        user,
        registerInfo,
        error,
        setRegisterInfo, //Look into usecallback for optimization
        registerUser
    }}>
        {children}
    </UserContext.Provider>
}