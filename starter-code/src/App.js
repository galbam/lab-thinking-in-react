import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from "./data.json";

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      productList: data,
      inStock: true
    }
  }

  handleSearch = (search) => {

    if (search) {
      let filteredProduct = this.state.productList.data.slice().filter(prod => {
        return (prod.name.toLowerCase().match(search.toLowerCase()) &&
          prod.stocked === this.state.inStock)
      });

      this.setState({
        productList: { data: filteredProduct }
      });
    }
    else {
      this.setState({
        productList: {
          data: data.data.filter(prod => {
            return (prod.stocked === this.state.inStock)
          })
        }
      })
    }
  }

  filterStock = (stock) => {

    if (stock) {
      let filteredProduct = this.state.productList.data.slice().filter(prod => {
        return prod.stocked === stock
      });

      this.setState({
        productList: { data: filteredProduct },
        inStock: stock
      });
    }
    else {
      this.setState({
        productList: {data: data.data},
          inStock: stock
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>IronStore</h1>
        <FilterableProductTable products={this.state.productList} search={this.handleSearch} filterStock={this.filterStock} />
      </div>
    );
  }
}

export default App;
