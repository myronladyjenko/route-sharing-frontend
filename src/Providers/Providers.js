import { createContext } from "react";
const SessionContext = createContext('noSession');

export const Providers = ({children}) => {
    return (<SessionContext.Provider >{children}</SessionContext.Provider>)
}