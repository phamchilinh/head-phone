import { Controller, Get, Post, Put, Res, Param, Body, Inject, HttpStatus } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrderController {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderServiceClient: ClientProxy
  ) { }

  @Get('/:userId')
  async getOrders(@Param('userId') id) {
    const orders = await this.orderServiceClient.send('getOrders', id);
    return orders
  }

  @Get('/:orderId/state')
  async checkOrderState(@Param('orderId') id) {
    const { state } = await firstValueFrom(this.orderServiceClient.send('getOneOrder', id));
    return state
  }

  @Put('/:orderId')
  async updateOrder(@Param('orderId') id, @Body() order) {
    const orderUpdated = this.orderServiceClient.send('updateOrder', { id, order });
    return orderUpdated
  }

  @Get('/:orderId/payment')
  async paymentOrder(@Param('orderId') id) {
    const orderPaymented = this.orderServiceClient.send('paymentOrder', id);
    return orderPaymented
  }

  @Get('/:orderId/cancel')
  async cancelOrder(@Param('orderId') id) {
    const orderCanceled = this.orderServiceClient.send('cancelOrder', id);
    return orderCanceled
  }

  @Post()
  async createOrder(@Body() order) {
    const orderCreated = this.orderServiceClient.send('createOrder', order);
    return orderCreated
  }
}
