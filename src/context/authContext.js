import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "LakshmiK",
      profilePic:
        "https://images.pexels.com/photos/24252222/pexels-photo-24252222/free-photo-of-illustration-with-dry-cypress-branches-and-a-flower-head.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};