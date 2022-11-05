import { productModel } from '../db';
var cheerio = require('cheerio');
// var request = require('request');
const axios = require('axios');

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async addProduct(productInfo) {
    return await this.productModel.create(productInfo);
  }

  async getProductList(topCategoryCode) {
    return await this.productModel.getProductList(topCategoryCode);
  }

  async setStock(products) {
    for (let i = 0; i < products.length; i++) {
      await this.productModel.updateStock(products[i]);
    }
  }
  async getProductDetail(id) {
    const productDetail = await this.productModel.findOne(id);
    return productDetail;
  }

  async updateProduct(id, newInfo) {
    const update = await this.productModel.updateProduct(id, newInfo);
    return update;
  }
}

const productService = new ProductService(productModel);

export { productService };
