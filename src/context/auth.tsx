import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(false);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(false);

  const providerValue: any = useMemo(
    () => ({ auth, setAuth }),
    [auth, setAuth],
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
