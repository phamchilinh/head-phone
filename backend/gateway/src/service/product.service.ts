import { Injectable } from "@nestjs/common";
import { ProductMock } from '../mock/product.mock'

@Injectable()
export class ProductService {

    constructor(private productMock: ProductMock) { }

    async getAll(): Promise<object[]> {
        return await this.productMock.get();
    }
}