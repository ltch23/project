import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserModel } from "../models/users.model";
import { UsersService } from "../services/users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {
    }
  
    @Post()
    async create(@Body() model: UserModel) {
      return await this.service.create(model);
    }
  
    @Get()
    async get(): Promise<UserModel[]> {
      return await this.service.get();
    }


}
