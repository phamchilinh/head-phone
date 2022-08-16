import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(OrderModule, new ConfigService().get('orderService'));
  app.listen();
}
bootstrap();
