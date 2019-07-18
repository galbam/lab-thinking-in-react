import React, { Component } from 'react';

class SearchBar extends Component {

     handleChange = (event) => {

          let val = event.target.value;
          this.props.search(val);

     }

     inStock = (event) => {

          let val = event.target.checked;
          this.props.filterStock(val);
     }

     render() {
          return (
               <div className="d-flex flex-column">
                    <label>Search</label>
                    <input type="search" name="search-product" onChange={this.handleChange} />
                    <div>
                         <input type="checkbox" name="stock" onChange={this.inStock}/>Only shows products on stock
                    </div>
               </div>
          )
     }
}

export default SearchBar;
