import { SessionProvider } from "./SessionContext";
import { ServerProvider } from "./ServerContext";

export const Providers = ({children}) => {
    return (
    <ServerProvider>
        <SessionProvider>{children}</SessionProvider> 
    </ServerProvider>);
}