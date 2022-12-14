import { Transport } from '@nestjs/microservices';

export class ConfigService {
    private readonly envConfig: { [key: string]: any } = null;

    constructor() {
        this.envConfig = {};
        this.envConfig.orderService = {
            options: {
                port: process.env.ORDER_SERVICE_PORT,
                host: process.env.ORDER_SERVICE_HOST,
            },
            transport: Transport.TCP,
        };
        this.envConfig.paymentService = {
            options: {
                port: process.env.PAYMENT_SERVICE_PORT,
                host: process.env.PAYMENT_SERVICE_HOST,
            },
            transport: Transport.TCP,
        };
    }

    get(key: string): any {
        return this.envConfig[key];
    }
}