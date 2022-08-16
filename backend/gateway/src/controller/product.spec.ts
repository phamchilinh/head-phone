import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '../service/product.service';
import { ProductController } from './product.controller';


describe('Product Controller', () => {
    let productController: ProductController;
    const mockProductService = {
        getAll: jest.fn(() => ([{
            "_id": "6229ab647069c00dd276b630",
            "title": "Samsung",
            "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
            "price": 150000,
            "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
        }]))
    };
    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [ProductService],
        })
            .overrideProvider(ProductService)
            .useValue(mockProductService)
            .compile();
        productController = moduleRef.get<ProductController>(ProductController);
    });
    describe('get all product', () => {
        it('should return object[]', async () => {
            expect(await productController.GetAllProduct()).toEqual([{
                "_id": "6229ab647069c00dd276b630",
                "title": "Samsung",
                "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
                "price": 150000,
                "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
            }]);
        });
    });
});
