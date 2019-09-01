import React from 'react';
import PropTypes from 'prop-types';

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

Cart.propTypes = {
    cartDetails: PropTypes.array.isRequired,
}

export default Cart;