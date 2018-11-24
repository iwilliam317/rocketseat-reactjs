import React, { Component } from 'react';
import api from '../../services/api'

export default class Main extends Component {

  state = {
    products: []
  }
  
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts  = async () => {
    const response = await api.get('/products');
    this.setState({products: response.data.docs})
  }

  render(){
    return (
      <div>
        <h1>Contagem de Produtos {this.state.products.length}</h1>
        {this.state.products.map(product =><p key={product._id}> {product.title}</p>)}
      </div>

      )
  }
}