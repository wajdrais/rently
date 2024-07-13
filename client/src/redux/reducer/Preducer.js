import { ADD_PRODUCT } from "../actiontype/Productactiontype";

const initialState = {
  products: [], // Initialize products array
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload], // Add newly added product to products array
      };
    // Add other cases if needed
    default:
      return state;
  }
};

export default productReducer;
