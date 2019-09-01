const InitialState = {
    items: [],
};

const addAllProductsToStore = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        items: payload,
    }
}

export function AllProductsReducer(state = InitialState, action) {
    switch(action.type) {
        case 'ADD_ALL_PRODUCTS' : return addAllProductsToStore(state, action);
        default: 
            return state;
    }
}