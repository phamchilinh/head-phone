import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Payment, PaymentSchema } from './model/payment.schema'
import { MongoConfigService } from './config/mongo.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.example', '.env'],
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }])
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule { }
