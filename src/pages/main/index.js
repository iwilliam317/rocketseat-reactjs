import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

  state = {
    products: [],
    productsInfo: {},
    page: 1
  }
  
  previousPage = () => {
    const { page, productsInfo } = this.state;
 
    if(page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber)
  }

  nextPage = () => {
    const { page, productsInfo } = this.state;
  
    if(page === productsInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber)
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts  = async (page = 1) => {    
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productsInfo } = response.data;

    this.setState({products: docs, productsInfo, page})
  }

  render(){

    const { products } = this.state;
    
    return (
      <div className="product-list">
        <h1>Contagem de Produtos {products.length}</h1>
        {products.map(product => (
            <article key={product._id}>
              <strong>{product.title}</strong>
              <p>{product.description}</p>
              <a href="#">Acessar</a>
            </article>
          ))}
        <div className="actions">
          <button onClick={this.previousPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>

      )
  }
}