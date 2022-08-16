import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {

    @Prop({ required: true })
    orderId: string;

    @Prop({ required: true })
    paymented: Boolean

    @Prop({ required: true, default: Date.now() })
    createdDate: Date
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)