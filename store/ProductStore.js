import { observable, action } from 'mobx'


class ProductStore {
  @observable.ref products = []
  @observable name = ""
  @observable price = ""


  @action onProductNameChange = (value) => {
    this.name = value
  }

  @action onProductPriceChange = (value) => {
    this.price = value
  }

  @action addProduct = () => {
    const variables = {
      name: this.name,
      price: parseInt(this.price)
    }
    this.products.push(variables)
    console.log(this.products)
  }

  @action deleteProduct = (product_index) => {
    // this.products.push(variables)
    // console.log(this.products)
  }

}

export default new ProductStore