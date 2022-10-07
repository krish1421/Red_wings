import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const register = (username, email, password, first_name, last_name, password2) => {
    return axios.post(API_URL + "register", {
      username,
      first_name,
      last_name,
      email,
      password,
      password2,
    });
  };

  const login = (username, password) => {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  export default {
    register,
    login,
  };