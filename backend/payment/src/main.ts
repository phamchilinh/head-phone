import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './payment.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PaymentModule, new ConfigService().get('paymentService'));
  app.listen();
}
bootstrap();
