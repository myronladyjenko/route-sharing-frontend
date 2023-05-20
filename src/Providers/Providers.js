import { SessionProvider } from "./SessionContext";

export const Providers = ({children}) => {
    return (<SessionProvider>{children}</SessionProvider>);
}