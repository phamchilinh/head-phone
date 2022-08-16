import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { ProductService } from "../service/product.service";
import { ApiTags } from '@nestjs/swagger';


@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private readonly productServerice: ProductService
  ) { }

  @Get()
  async GetAllProduct() {
    const products = await this.productServerice.getAll();
    return products
  }
}