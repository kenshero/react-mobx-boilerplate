import React, { Component } from 'react';
import { observer } from 'mobx-react'


import ProductStore from '../store/ProductStore'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <div className="container">
                  HomePage
                </div>
              </h1>
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <div className="container">
          <FormInput/>
          <br/>
          <br/>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.products.map((product, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>image</td>
                      <td>{ product.name }</td>
                      <td>{ product.price }</td>
                      <td>{ product.category }</td>
                      <td>
                        <a className="button is-danger" onClick={ (e) => this.onDeleteProduct(e, product._id) }>Delete</a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


const FormInput = observer(({products}) => {
  const onProductNameChange = (event) => {
    ProductStore.onProductNameChange(event.target.value)
  }

  const onProductPriceChange = (event) => {
    ProductStore.onProductPriceChange(event.target.value)
  }

  const onProductCategoryChange = (event) => {
    ProductStore.onProductCategoryChange(event.target.value)
  }

  const onCreateProduct = (event) => {
    ProductStore.addProduct()
  }

  return (
    <div>
      <div className="field is-horizontal product-name">
        <div className="field-label is-medium">
          <label className="label">Product</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="text" placeholder="name" 
               onChange={ (event) => onProductNameChange(event) } value={ ProductStore.name } />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal product-price">
        <div className="field-label is-medium">
          <label className="label">Price</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="number" placeholder="xxxx" 
               onChange={ (event) => onProductPriceChange(event) } value={ ProductStore.price } />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal product-category">
        <div className="field-label is-medium">
          <label className="label">Category</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="text" placeholder="separate by ',' comma" 
               onChange={ (event) => onProductCategoryChange(event) } value={ ProductStore.category } />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal product-image">
        <div className="field-label is-medium">
          <label className="label">Images : </label>
        </div>
        <div className="field-body">
          <div className="field">
            <input className="is-medium" type="file" />
          </div>
        </div>
      </div>
      <br/>
      <div className="field">
        <p className="control">
          <button className="button is-primary" onClick={ (event) => onCreateProduct(event) }>Submit</button>
        </p>
      </div>
    </div>
  )
})


const Navbar = () => (
  <div>
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </a>
          <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
          <a className="nav-item is-tab is-hidden-mobile">About</a>
        </div>
        <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        </span>
        <div className="nav-right nav-menu">
        <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
        <a className="nav-item is-tab is-hidden-tablet">About</a>
        <a className="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
  </div>
)