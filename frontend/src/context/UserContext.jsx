import { createContext, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utilities/httpReqs";


export const UserContext = createContext({});


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });
    const [registerError, setRegisterError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);



    const registerUser = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setRegisterError(null);
        const res = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

        setIsLoading(false);
        if (res.errorOccurred) {
            setRegisterError(res.message);
        }

        setUser(res);
        localStorage.setItem("User", JSON.stringify(res));
    }

    const loginUser = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setRegisterError(null);
        const res = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo));

        setIsLoading(false);
        if (res.errorOccurred) {
            setLoginError(res.message);
            return;
        }

        setUser(res);
        localStorage.setItem("User", JSON.stringify(res));
    }

    const logoutUser = () => {
        localStorage.removeItem("User");
        setUser(null);
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("User")));
    }, []);


    return <UserContext.Provider value={{
        user,
        registerInfo,
        registerError,
        setRegisterInfo, //Look into usecallback for optimization
        registerUser,
        logoutUser,
        loginUser,
        loginInfo,
        setLoginInfo
    }}>
        {children}
    </UserContext.Provider>
}