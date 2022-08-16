import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderDocument } from "./model/order.schema";

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,

    ) { }

    async find(id): Promise<Order[]> {
        return await this.orderModel.find({ createdById: id }).exec();
    }

    async findOne(id): Promise<Order> {
        return await this.orderModel.findById(id).exec();
    }

    async create(order: object): Promise<Order> {
        const newOrder = new this.orderModel(order);
        return newOrder.save();
    }

    async update(id, order: object): Promise<Order> {
        return await this.orderModel.findByIdAndUpdate(id, order, { new: true })
    }
}