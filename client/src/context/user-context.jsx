import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/api.js";

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      // Make a login request to the server
      const { data } = await axios.post(`${baseUrl}/user/`, body);
      localStorage.setItem("user", JSON.stringify(data.findUser));
      setUser(data.findUser);
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/user/register`, {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });

      console.log(response.data);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, logoutHandler, registerHandler, loginHandler }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;