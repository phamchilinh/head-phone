import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';
import { OrderService } from './order.service';
import { firstValueFrom } from 'rxjs';
import { Order } from "./model/order.schema";


@Controller()
export class OrderController {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentServiceClient: ClientProxy,
    private readonly orderService: OrderService
  ) { }

  @MessagePattern('paymentOrder')
  async paymentOrder(id: string) {
    const order = await this.orderService.findOne(id);
    if (order.state == 'created') {
      const paymentResponse = await firstValueFrom(this.paymentServiceClient.send('createPayment', id));
      if (paymentResponse) {
        const state = paymentResponse.paymented ? 'confirmed' : 'cancelled';
        const orderUpdated = this.orderService.update(id, { state });
        if (state == 'confirmed') {
          setTimeout(() => {
            this.orderService.update(id, { state: "transformed" })
          }, 5000);
        }
        return orderUpdated;
      }
    }
    return order;
  }

  @MessagePattern('getOrders')
  async getOrders(id: string) {
    return this.orderService.find(id);
  }

  @MessagePattern('getOneOrder')
  async getOneOrder(id: string) {
    return this.orderService.findOne(id);
  }

  @MessagePattern('updateOrder')
  async updateOrders(data: { id: string, order: Order }) {
    return this.orderService.update(data.id, data.order);
  }

  @MessagePattern('cancelOrder')
  async cancelOrder(id: string) {
    const query = { "state": "cancelled" };
    return this.orderService.update(id, query);
  }

  @MessagePattern('createOrder')
  async createOrders(data: Order) {
    return this.orderService.create(data);
  }
}
