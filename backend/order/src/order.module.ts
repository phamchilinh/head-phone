import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices'
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './model/order.schema';
import { ConfigService } from './config/config.service'
import { MongoConfigService } from './config/mongo.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.example', '.env'],
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])
  ],
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
export class OrderModule { }
