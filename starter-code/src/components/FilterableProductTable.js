import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
     render() {          
          return (
               <div>
                    <SearchBar search={this.props.search} filterStock={this.props.filterStock}/>
                    <ProductTable products={this.props.products}/>
               </div>
          )
     }
}

export default FilterableProductTable;
