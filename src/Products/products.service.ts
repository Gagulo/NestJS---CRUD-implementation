import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  fetchProducts() {
    return [...this.products];
  }

  getSingleProduct(prodId: string) {
    const product = this.products.find(prod => prod.id === prodId);
    if (!product) {
      throw new NotFoundException('Nothing Here');
    }
    return { ...product };
  }
}
