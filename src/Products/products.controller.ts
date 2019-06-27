import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly prodService: ProductService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDecs: string,
    @Body('price') prodPrice: number,
  ) {
    const generetedID = this.prodService.insertProduct(
      prodTitle,
      prodDecs,
      prodPrice,
    );
    return { id: generetedID };
  }

  @Get()
  getAllProducts() {
    return this.prodService.fetchProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.prodService.getSingleProduct(prodId);
  }
}
