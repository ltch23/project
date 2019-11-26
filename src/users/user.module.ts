import { Module } from '@nestjs/common';
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/user.schema";

@Module({
imports:[MongooseModule.forFeature([{name:'User',schema: UserSchema}])],
controllers: [UserController],
providers: [UserService],


})
export class UsersModule {}
