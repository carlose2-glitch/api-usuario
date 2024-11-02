import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { createUser, usersSchema } from './databaseUser.schema';
import { CreateUserEvaluate } from './createUser';
import { updateUser } from './updateUser';
import { updatePass } from './updatePass';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: createUser.name, 
        schema: usersSchema 
      }])
      
  ],
  controllers: [UsersController],
  providers:[UsersService, CreateUserEvaluate, updateUser, updatePass]
})
export class UsersModule {}
