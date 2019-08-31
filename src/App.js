import React, { Component } from 'react';
import './App.css';
import data from './dataList';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';
import CartDetails from './components/cartDetails';

// Class Component: - Smart/ Container component
class App extends Component {
  state = {
    productList: data,
    cartList: [],
    displayType: 'allProducts',
  };

  addItemToCart = (item) => {
    console.log(' added item =', item);
    const { cartList } = this.state;
    const newCartDetails = [...cartList];
    newCartDetails.push(item);
    console.log('New Added Items = ', newCartDetails);
    this.setState({
      cartList: newCartDetails,
    });
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
    const { productList, cartList, displayType } = this.state;
    return (
      <div className="App">
        <Header msg="Shop here!!" className="head_container">
          <h5>Amazing Tech gadgeds here !! </h5>
          <Cart
            cartDetails={cartList}
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
          <CartDetails cartItems={cartList} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
