
export const productsCard = (id,quantity) => async (dispatch,getState) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      
      // dispatch işlemi async olarak gerçekleştirilmelidir.
      dispatch({ type: "ADD_CARD", payload:{
        id:data.id,
        image:data.image,
        title:data.title,
        description:data.description,
        price:data.price,
        qnty:quantity
    }});
    } catch (error) {
      console.error('Error fetching products:', error);
    }

    const{card:{cardItems}} = getState();
    localStorage.setItem('cardItems',JSON.stringify(cardItems))

  };


  export const removeCard = (productId) => (dispatch,getState) => {
    dispatch({ type: "REMOVE_CARD", payload:productId});

    const{card:{cardItems}} = getState();
    localStorage.setItem('cardItems',JSON.stringify(cardItems))
}