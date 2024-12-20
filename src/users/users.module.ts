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
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true,
    }),
    MongooseModule.forFeature([
      {
        name: createUser.name, 
        schema: usersSchema 
      }]),
      JwtModule.register({
        secret: process.env.JWT_KEY,
        signOptions:{expiresIn: '300s'},

      })
      
  ],
  controllers: [UsersController],
  providers:[UsersService, CreateUserEvaluate, updateUser, updatePass, loginUsers]
})
export class UsersModule {}
