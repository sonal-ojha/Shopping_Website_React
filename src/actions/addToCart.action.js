//  Action - type & payload
function requestAddToCart(item) {
    return {
        type: 'REQUEST_ADD_TO_CART',
        payload: item,
    }
}

// Add To Cart - Action Creator
export const addItemToCart = (item) => {
    return (dispatch => {
        dispatch(requestAddToCart(item));
    })
}