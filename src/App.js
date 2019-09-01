import React, { Component } from 'react';
import './App.css';
import data from './dataList';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';
import CartDetails from './components/cartDetails';
import { addItemToCart } from './actions/addToCart.action';
import { connect } from 'react-redux';
import { allProducts } from './actions/allProducts.action';

// Class Component: - Smart/ Container component
class App extends Component {
  state = {
    displayType: 'allProducts',
  };

  componentDidMount() {
    const { _allProducts } = this.props;
    _allProducts(data);
  }

  addItemToCart = (item) => {
    const { _addItemToCart } = this.props;
    _addItemToCart(item);
  }

  handleDisplayType = () => {
    const { displayType } = this.state;
    if (displayType === 'allProducts') {
      this.setState({
        displayType: 'cartList',
      });
    } else{
      this.setState({
        displayType: 'allProducts',
      });
    }
  }

  render() {
    const { displayType } = this.state;
    const { allCartItems, productList } = this.props;
    return (
      <div className="App">
        <Header msg="Shop here!!" className="head_container">
          <h5>Amazing Tech gadgeds here !! </h5>
          <Cart
            cartDetails={allCartItems}
            showDetails={this.handleDisplayType}
            displayType={displayType}
          />
        </Header>
        {displayType === 'allProducts' && (
          <Products
            allProducts={productList}
            addToCart={this.addItemToCart}
          />
        )}
        {displayType !== 'allProducts' && (
          <CartDetails cartItems={allCartItems} />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  allCartItems: store.cart.items,
  productList: store.allProducts.items,
});

const mapDispatchToProps = (dispatch) => ({
  _addItemToCart: (item) => {
    dispatch(addItemToCart(item))
  },
  _allProducts: (data) => {
    dispatch(allProducts(data))
  },
})

export default connect(mapStoreToProps, mapDispatchToProps)(App);
