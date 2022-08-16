import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OrderDocument = Order & Document;

@Schema()
export class Order {

  @Prop({ required: true })
  descreption: string;

  @Prop({ required: true })
  createdById: string

  @Prop([raw({
    productId: { type: String },
    img: { type: String },
    title: { type: String },
    price: { type: Number },
    quantity: { type: Number }
  })])
  products: Record<string, any>[];

  @Prop({ required: true })
  total: Number

  @Prop({ default: 'created' })
  state: string

  @Prop({ default: Date.now() })
  createdDate: Date
}

export const OrderSchema = SchemaFactory.createForClass(Order)