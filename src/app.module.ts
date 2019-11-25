import { Module } from '@nestjs/common';
import { UsersModule} from "./users/users.module";
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://luistch:qweasd01@cluster0-bqent.gcp.mongodb.net/test?retryWrites=true&w=majority'),
  ],
  
})
export class AppModule {}
