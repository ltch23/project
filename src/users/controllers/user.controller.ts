import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";

@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) {
    }
  
    @Post()
    async create(@Body() model: UserModel) {
      console.log(model.nombre)
      console.log(model.email)
      
      return await this.service.create(model);
    }
  
    @Get()
    async get(): Promise<UserModel[]> {
       
      return await this.service.get();
    }

    @Put(':id')
    async update(@Param('id') id, @Body() model: UserModel) {
     console.log(id);
      return await this.service.update(id, model);
    }
  
    @Delete(':id')
    async remove(@Param('id') id) {
      return await this.service.remove(id);
    }

    @Get(':data=:rut')
      async getByField(@Param('rut') rut, @Param('data') data: string): Promise<UserModel[]> {
      return await this.service.getbyField(data, rut);
    }



}
