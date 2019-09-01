function addAllProducts(data) {
    return {
        type: 'ADD_ALL_PRODUCTS',
        payload: data,
    }
}

export const allProducts = (data) => {
    return (dispatch => {
        dispatch(addAllProducts(data))
    })
}