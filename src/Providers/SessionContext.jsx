import { createContext, useState, useContext } from "react";
const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [wallet, updateWallet] = useState("");
  const value = { wallet, updateWallet };
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined)
    throw new Error("session must be used within a session provider");
  return context;
}
