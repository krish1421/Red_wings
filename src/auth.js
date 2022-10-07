import AuthService from "../services/auth.service";

export const register = (username,first_name,last_name, email, password, password2) => (dispatch) => {
    return AuthService.register(username,first_name,last_name, email, password,password2).then(
      (response) => {
        dispatch({
          type: 'success',
        });
  
        dispatch({
          type: 'SET_MESSAGE',
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: 'REGISTER_FAIL',
        });
  
        dispatch({
          type: 'SET_MESSAGE',
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };



  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: 'LOGIN_FAIL',
        });
  
        dispatch({
          type: 'SET_MESSAGE',
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };