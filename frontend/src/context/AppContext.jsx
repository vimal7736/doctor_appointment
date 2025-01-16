import { createContext } from "react";
import { doctors } from "../assets/assets";

export const  AppContext = createContext();
const AppContextProvider = ({children}) => {
    const currency = '$';
    return (
        <AppContext.Provider value={{doctors , currency}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;