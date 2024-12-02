import { createContext, useState } from "react";
import {db} from '../util/FirebaseConfic'

import React from "react";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

 const FirebaseContextProvider = ({ children }) => {
  const [user, setUser] = useState("nithin");

  return (
    <FirebaseContext.Provider value={{ db }}>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
};


export default FirebaseContextProvider