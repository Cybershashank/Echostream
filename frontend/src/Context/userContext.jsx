import { createContext, useContext, useState } from "react";
import { useRouter } from 'next/navigation';


const AppContext = createContext();

export const AppProvider = ({ children  }) => {

    const [ currentUser, setCurrentUser ] = useState(
        JSON.parse(sessionStorage.getItem('user'))
      );

    const [ currentuser, setCurrentuser ] = useState(
        JSON.parse(sessionStorage.getItem('admin'))
      );

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);
    const [loggedin, setLoggedin] = useState(currentuser !== null);
    const router=useRouter();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        setCurrentUser(null);
        router.push('/login');
    }
    const adminlogout = () => {
        sessionStorage.removeItem('admin');
        setLoggedin(false);
        setCurrentuser(null);
        router.push('/login');
    }

    return (
        <AppContext.Provider value={{ loggedIn, setLoggedIn,loggedin, setLoggedin, logout,adminlogout, currentUser, setCurrentUser, currentuser, setCurrentuser }} >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;