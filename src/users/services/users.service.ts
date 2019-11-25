import { Model } from "mongoose";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel} from "../models/users.model";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly model: Model<UserModel>) {
    }

    async get(): Promise<UserModel[]> {
        return await this.model.find().exec();
      }
    
      async create(model: UserModel): Promise<UserModel> {
        const item = new this.model(model);
        return await item.save();
      }

}
