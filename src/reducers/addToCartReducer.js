const InitialState = {
    items: [],
};

const addToCart = (state, action) => {
    const { payload} = action;
    return {
        ...state,
        items: [...state.items, payload],
    }
}

export function addToCartReducer(state = InitialState, action) {
    switch(action.type) {
        case 'REQUEST_ADD_TO_CART': return addToCart(state, action);
    default: 
        return state;
    }
}