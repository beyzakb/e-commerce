export const productsAction = () => async (dispatch) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      
      // dispatch işlemi async olarak gerçekleştirilmelidir.
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
export const productsActionDetail = (id) => async (dispatch) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      
      // dispatch işlemi async olarak gerçekleştirilmelidir.
      dispatch({ type: "GET_DETAILS", payload: data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  