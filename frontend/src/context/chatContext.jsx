import React, { createContext, useContext, useEffect, useState } from 'react'
import { baseUrl, getRequest } from '../utilities/httpReqs';
import { UserContext } from './userContext';


export const ChatContext = createContext({});

export const ChatContextProvider = ({ children }) => {
    const [userChats, setUserChats] = useState(null);
    const [userChatsError, setUserChatsError] = useState(null);
    const user = JSON.parse(localStorage.getItem("User"));
    useEffect(() => {
        const getUserChats = async () => {
            console.log(user._id);
            if (user?._id) {

                const res = await getRequest(`${baseUrl}/chats/${user._id}`);
                if (res.error) {
                    return setUserChatsError(res);
                }
            }
        }
        getUserChats();
    }, [user])

    useEffect(() => {
        console.log(userChats);
    }, [userChats])


    return (
        <ChatContext.Provider value={{
            userChats,
            userChatsError
        }}>
            {children}
        </ChatContext.Provider>
    )
}

