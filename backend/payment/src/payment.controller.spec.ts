import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Payment } from "./model/payment.schema";


describe('UsersController', () => {
  let paymentController: PaymentController;
  const paymentMock: Payment = {
    orderId: '622e21d316ebeb8739fa4288',
    paymented: true,
    createdDate: null

  }
  const mockPaymentService = {
    create: jest.fn(() => paymentMock),
  };
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService],
    })
      .overrideProvider(PaymentService)
      .useValue(mockPaymentService)
      .compile();
    paymentController = moduleRef.get<PaymentController>(PaymentController);
  });
  describe('create Payment', () => {
    it('should return payment', async () => {
      expect(await paymentController.createPayment('622e21d316ebeb8739fa4288')).toEqual(paymentMock);
    });
  });
});
