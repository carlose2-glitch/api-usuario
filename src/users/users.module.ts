import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { createUser, usersSchema } from './databaseUser.schema';
import { CreateUserEvaluate } from './createUser';
import { updateUser } from './updateUser';
import { updatePass } from './updatePass';
import { JwtModule } from '@nestjs/jwt';
import { loginUsers } from './loginUser';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: createUser.name, 
        schema: usersSchema 
      }]),
      JwtModule.register({
        secret: process.env.JWT_KEY,
        signOptions:{expiresIn: '20h'},

      })
      
  ],
  controllers: [UsersController],
  providers:[UsersService, CreateUserEvaluate, updateUser, updatePass, loginUsers]
})
export class UsersModule {}
