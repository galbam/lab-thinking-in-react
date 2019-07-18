import React, { Component } from 'react';

class ProductRow extends Component {
     render() {
          return (
               <tr>
                    <td style={this.props.product.stocked?{color: "black"}:{color: "red"} }>{this.props.product.name}</td>
                    <td>{this.props.product.price}</td>
               </tr>
          )
     }
}

export default ProductRow;
