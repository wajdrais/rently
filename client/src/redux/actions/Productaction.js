import axios from "axios";
import { ADD_PRODUCT } from "../actiontype/Productactiontype";

export const addProduct = (productData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/product/Addproduct",
      productData
    );
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data, // Assuming the response contains the newly added product
    });
  } catch (error) {
    // Handle error
    console.log(error)
  }
};
