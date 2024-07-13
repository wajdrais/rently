import {
  GETCURRENT,
  LOGOUT,
  SIGNIN,
  SIGNUP,
  USERUPDATED,
} from "../actiontype/UseractionT";

const initialState = {
  user: {},
  msg: "",
};
export const userreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
    case SIGNIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, msg: payload.msg };
    case GETCURRENT:
      return { ...state, user: payload.user };
    case LOGOUT:
      return { ...state, user: {}, msg: "" };
    case USERUPDATED:
      return { ...state, msg: payload.msg };

    default:
      return state;
  }
};
