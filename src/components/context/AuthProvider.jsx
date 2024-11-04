import { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // localStorage.clear()

  const [userData, setUserData] = useState([]);

  // const data = getLocalStorage()
  // console.log(data);

  useEffect(() => {
    // setLocalStorage()
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
