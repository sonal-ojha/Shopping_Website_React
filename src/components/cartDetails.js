import React from 'react';

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

export default CartDetails;