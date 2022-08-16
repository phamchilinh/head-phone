import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Payment, PaymentDocument } from './model/payment.schema';


@Injectable()
export class PaymentService {

  constructor(@InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,

  ) { }

  async create(id): Promise<Payment> {
    const paymented = Boolean(Math.floor(Math.random() * 2));
    const payment = {
      orderId: id,
      paymented: paymented
    };
    const newPayment = new this.paymentModel(payment);
    return newPayment.save();
  }
}
