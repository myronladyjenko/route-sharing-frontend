import { createContext, useContext } from "react";
const ServerContext = createContext("http://34.148.97.171/");

export function ServerProvider({ children }) {
  const baseURL = "http://34.148.97.171/";
  return (
    <ServerContext.Provider value={baseURL}>{children}</ServerContext.Provider>
  );
}
export function useServer() {
  const context = useContext(ServerContext);
  if (context === undefined)
    throw new Error("server must be used within a server provider");
  return context;
}
