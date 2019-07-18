import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
     render() {
          return (
               <div>
                    <table className="table table-bordered mt-5">
                         <thead class="thead-dark">
                              <tr>
                                   <th>Name</th>
                                   <th>Price</th>
                              </tr>
                         </thead>
                         <tbody>

                              {this.props.products.data.map(prod => {
                                   return <ProductRow key={prod.id} product={prod} />
                              })}
                              
                         </tbody>
                    </table>
               </div>
          )
     }
}

export default ProductTable;
