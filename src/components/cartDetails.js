import React from 'react';
import PropTypes from 'prop-types';

function CartDetails(props) {
    return(
        <div>
            {props.cartItems.map(item => (
                <div key={item.id}>
                    {item.name}
                    <img src={item.path} alt={item.name} className="productImage" />
                </div>
            ))}
        </div>
    )
}

CartDetails.propTypes = {
    cartItems: PropTypes.array.isRequired,
}

export default CartDetails;