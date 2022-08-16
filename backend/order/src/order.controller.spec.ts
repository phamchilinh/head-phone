import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from "./model/order.schema";
import { ClientProxyFactory } from '@nestjs/microservices'
import { ConfigService } from './config/config.service'

describe('Order Controller', () => {
  let orderController: OrderController;
  const orderMock: Order = {
    "descreption": "Linh order update",
    "createdById": "622996d57069c00dd276b625",
    "products": [{
      "productId": "6229ab647069c00dd276b630",
      "img": "https://hc.com.vn/i/ecommerce/media/GS.006091_FEATURE_71014.jpg",
      "title": "Iphone 13",
      "price": 14000000,
      "quantity": 1
    }],
    "total": 14000000,
    "state": "created",
    "createdDate": null
  }
  const mockOrderService = {
    findOne: jest.fn((id) => orderMock),
    find: jest.fn((id) => [orderMock]),
    update: jest.fn((id, order) => orderMock),
    create: jest.fn((order) => orderMock)
  };
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService,
        ConfigService,
        {
          provide: 'PAYMENT_SERVICE',
          useFactory: (configService: ConfigService) => {
            const paymentServiceOptions = configService.get('paymentService');
            return ClientProxyFactory.create(paymentServiceOptions);
          },
          inject: [ConfigService],
        }],
    })
      .overrideProvider(OrderService)
      .useValue(mockOrderService)
      .compile();
    orderController = moduleRef.get<OrderController>(OrderController);
  });
  describe('create Order', () => {
    it('should return order', async () => {
      expect(await orderController.createOrders(orderMock)).toEqual(orderMock);
    });
  });
  describe('get Orders', () => {
    it('should return order[]', async () => {
      expect(await orderController.getOrders('622e21d316ebeb8739fa4288')).toEqual([orderMock]);
    });
  });
  describe('get One Order', () => {
    it('should return order', async () => {
      expect(await orderController.getOneOrder('622e21d316ebeb8739fa4288')).toEqual(orderMock);
    });
  });
  describe('update Orders', () => {
    it('should return order', async () => {
      expect(await orderController.updateOrders({ id: '622e21d316ebeb8739fa4288', order: orderMock })).toEqual(orderMock);
    });
  });
  describe('cancel Order', () => {
    it('should return order', async () => {
      expect(await orderController.cancelOrder('622e21d316ebeb8739fa4288')).toEqual(orderMock);
    });
  });
});
