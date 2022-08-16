import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../model/user.schema";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,

    ) { }
    async signin(user: User): Promise<any> {
        const foundUser = await this.userModel.findOne({ email: user.email }).exec();
        if (foundUser) {
            const { _id, password } = foundUser;
            if (await bcrypt.compare(user.password, password)) {
                return {
                    status: HttpStatus.OK,
                    message: 'user_signin_success',
                    id: _id,
                  };
            }
            return {
                status: HttpStatus.NOT_FOUND,
                message: 'user_not_match',
                id: null,
              };
        }
        return {
            status: HttpStatus.NOT_FOUND,
            message: 'user_not_found',
            id: null,
          };
    }

    async signup(user: User): Promise<any> {
        const foundUser = await this.userModel.findOne({ email: user.email }).exec();
        if (!foundUser) {
            const salt = await bcrypt.genSalt();
            const hashPass = await bcrypt.hash(user.password, salt);
            const userSchema = {
                fullname: user.fullname,
                email: user.email,
                password: hashPass
            }
            const newUser = new this.userModel(userSchema);
            return newUser.save();
        }
        return new HttpException('Email existed!', HttpStatus.UNAUTHORIZED)
    }

    async getOne(email): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }
}