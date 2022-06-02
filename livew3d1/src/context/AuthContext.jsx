import {createContext, useState} from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
     const [isAuthor, setIsAuthor] = useState(false);

     const login = (username , password) => {
         if(username && password){

            // call api here to get acess token
             setIsAuthor(true);
         }
     };

     const logout = () => {
        // call api to get inform that session is over
            setIsAuthor(false);
        
    };

    return (<AuthContext.Provider value = {{isAuthor,login,logout}}>{children}</AuthContext.Provider>
    )
};
