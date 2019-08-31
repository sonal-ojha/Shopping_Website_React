import React from 'react';

function Cart(props) {
    return(
        <div>
            Cart Cout : {props.cartDetails.length}
            <button onClick={props.showDetails}>
                {props.displayType === 'allProducts' ?  'Show Cart Items' : 'All Products'}
            </button>
        </div>
    )
}

export default Cart;