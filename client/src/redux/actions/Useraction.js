import axios from "axios";
import {
  ALERTERROR,
  CLEARERROR,
  GETCURRENT,
  LOGOUT,
  SIGNIN,
  SIGNUP,
  USERUPDATED,
} from "../actiontype/UseractionT";

const alerterror = (msg) => (dispatch) => {
  const id = Math.random();
  dispatch({ type: ALERTERROR, payload: { id, msg } });
  setTimeout(() => {
    dispatch({ type: CLEARERROR, payload: id });
  }, 3000);
};

export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/user/Signup", data);
    dispatch({
      type: SIGNUP,
      payload: res.data,
    });
    navigate("/Cprofil");
  } catch (error) {
    console.log(error);
    error.response.data.errors.forEach((element) => {
      dispatch(alerterror(element.msg));
    });
  }
};
export const Login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/user/Signin", data);
    dispatch({
      type: SIGNIN,
      payload: res.data,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
    error.response.data.errors.forEach((element) => {
      dispatch(alerterror(element.msg));
    });
  }
};

export const Getuser = () => async (dispatch) => {
  const config = {
    headers: { token: localStorage.getItem("token") },
  };
  try {
    const res = await axios.get(
      "http://localhost:5000/user/Getoneuser",
      config
    );
    dispatch({
      type: GETCURRENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = (navigate) => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  navigate("/SignUpIn");
};

export const UpdateP = (id, data, navigate) => async (dispatch) => {
  try {
    await axios.put("http://localhost:5000/user/Cprofil/" + id, data);
    dispatch(Getuser());
    navigate("/Mainprofil");
  } catch (error) {
    console.log(error);
  }
};

export const UpdateD = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:5000/user/Update/" + id,
      data
    );
    dispatch({
      type: USERUPDATED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    error.response.data.errors.forEach((element) => {
      dispatch(alerterror(element.msg));
    });
  }
};
