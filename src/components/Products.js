import React from 'react';
import './allStyles.css';

class Products extends React.Component {
    handleAddToCart = (e, item) => {
        const { addToCart } = this.props;
        addToCart(item);
    }
    render() {
        const { allProducts } = this.props;
        return(
            <div>
                All Products available here :-
                {allProducts.map((product, index) => (
                    <div className="prodItem" key={index}>
                        <img src={product.path} alt={product.name} className="productImage" />
                        <div>
                            {product.name}
                        </div>
                        <div>
                            <button onClick={(e) => this.handleAddToCart(e, product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Products;