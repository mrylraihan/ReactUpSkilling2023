import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({
    isLoggedIn:false, 
    // we are passing an empty function because we arent gonna use it anyway this is just for the auto complete when we try to access the context in our components 
    onLogout:()=>{}, 
    onLogin:()=>{}
});


export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);
    
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>{props.children}</AuthContext.Provider>
}

export default AuthContext