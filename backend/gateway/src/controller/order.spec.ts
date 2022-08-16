import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { ConfigService } from '../config/config.service'
import { ClientProxyFactory } from '@nestjs/microservices';

describe('Order Controller', () => {
    let orderController: OrderController;
    const orderMock = {
        "_id": "622eb3aff2ff017a43d6bb3e",
        "createdDate": "2022-03-14T02:09:28.101Z",
        "state": "transformed",
        "total": 150006,
        "products": [
            {
                "quantity": 1,
                "_id": "622ac3d4db84d65d17428a0a"
            }
        ],
        "createdById": "622996d57069c00dd276b625",
        "descreption": "linh order",
        "__v": 0
    }
    const mockOrderService = {
        send: jest.fn((pattern, param) => {
            switch (pattern) {
                case 'getOrders': return [orderMock]
                case 'updateOrder': return orderMock
                case 'paymentOrder': return orderMock
                case 'cancelOrder': return orderMock
                case 'createOrder': return orderMock
                default:
            }
        })
    };
    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [OrderController],
            providers: [
                ConfigService,
                {
                    provide: 'ORDER_SERVICE',
                    useFactory: (configService: ConfigService) => {
                        const orderServiceOptions = configService.get('orderService');
                        return ClientProxyFactory.create(orderServiceOptions);
                    },
                    inject: [ConfigService],
                }
            ],
        })
            .overrideProvider('ORDER_SERVICE')
            .useValue(mockOrderService)
            .compile();
        orderController = moduleRef.get<OrderController>(OrderController)
    });
    describe('get all product', () => {
        it('should return object[]', async () => {
            expect(await orderController.getOrders('622996d57069c00dd276b625')).toEqual([orderMock]);
        });
    });
    describe('update Order', () => {
        it('should return object', async () => {
            expect(await orderController.updateOrder('622eb3aff2ff017a43d6bb3e', orderMock)).toEqual(orderMock);
        });
    });
    describe('payment Order', () => {
        it('should return object', async () => {
            expect(await orderController.paymentOrder('622eb3aff2ff017a43d6bb3e')).toEqual(orderMock);
        });
    });
    describe('cancel Order', () => {
        it('should return object', async () => {
            expect(await orderController.cancelOrder('622eb3aff2ff017a43d6bb3e')).toEqual(orderMock);
        });
    });
    describe('create Order', () => {
        it('should return object', async () => {
            expect(await orderController.createOrder(orderMock)).toEqual(orderMock);
        });
    });
});
