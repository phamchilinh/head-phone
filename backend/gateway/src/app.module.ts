import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { OrderController } from './controller/order.controller';
import { UserController } from './controller/user.controller';
import { ProductController } from './controller/product.controller';
import { User, UserSchema } from './model/user.schema';
import { UserService } from './service/user.service';
import { ProductService } from './service/product.service';
import { ProductMock } from './mock/product.mock'
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
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [OrderController, UserController, ProductController],
  providers: [UserService, ProductService, ProductMock,
    ConfigService,
    {
      provide: 'ORDER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const orderServiceOptions = configService.get('orderService');
        return ClientProxyFactory.create(orderServiceOptions);
      },
      inject: [ConfigService],
    }],
})
export class AppModule { }
