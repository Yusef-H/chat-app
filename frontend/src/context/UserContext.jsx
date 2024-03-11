import { createContext, useState } from "react";


export const UserContext = createContext({});


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    });


    return <UserContext.Provider value={{
        user,
        registerInfo,
        setRegisterInfo //Look into usecallback for optimization
    }}>
        {children}
    </UserContext.Provider>
}