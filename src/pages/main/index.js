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
    const [ products ] = this.state;
    return (
      <div>
        <h1>Contagem de Produtos {products.length}</h1>
        {products.map(product =><p key={product._id}> {product.title}</p>)}
      </div>

      )
  }
}