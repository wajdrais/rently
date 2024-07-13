import { ALERTERROR, CLEARERROR } from "../actiontype/UseractionT";

const initialState = [];

export const errorreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERTERROR:
      return [...state, payload];
    case CLEARERROR:
      return (state = state.filter((e) => e.id != payload));
    default:
      return state;
  }
};
