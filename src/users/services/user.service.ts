import { Model } from "mongoose";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel} from "../models/user.model";
import { UsersModule } from "../user.module";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly model: Model<UserModel>) {
    }

    async get(): Promise<UserModel[]> {
        return await this.model.find().exec();
      }
    

    async create(model: UserModel): Promise<UserModel> {
        const user = new this.model(model);
        return await user.save();
      }

    async update(id: string, model: UserModel): Promise<UserModel> {
      return await this.model.findByIdAndUpdate(id, model);
    }
  
    async remove(id: string): Promise<boolean> {
      try {
        await this.model.findByIdAndDelete(id);
        return true;
      } catch (e) {
        return e;
      }
    }

    async getbyField(data:string,rut:string): Promise<UserModel[]> {
      
      if (data =="rut")
        return await this.model.find({"rut":rut});
      // else if (data =="rutChilen")
      //   return await this.model.find({"rut":rut});
      // else if (data =="nombre")
      //   return await this.model.find({"nombre":rut});
      // else if (data =="apellido")
      //   return await this.model.find({"apellido":rut});
      // else if (data =="telefono")
      //   return await this.model.find({"telefono":rut});
      // else if (data =="sexo")
      //   return await this.model.find({"sexo":rut});
      // else if (data =="email")
      //   return await this.model.find({"email":rut});
      // else if (data =="direcciones")
      //   return await this.model.find({"direcciones":rut});
      // else if (data =="nDirecciones")
      //   return await this.model.find({"nDirecciones":rut});
      // else
      // Intente que sea dinamica, pero por sintaxis y semantica no alcance
      
    }  

}
