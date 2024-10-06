import {createContext, useState, useEffect} from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const loginUser = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser)
            setUser(JSON.parse(savedUser));
    }, []);

    return (
        <UserContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    );
};