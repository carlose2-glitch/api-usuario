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
import { tasks } from 'src/task/createTaks';
import { createTask, taskSchema } from 'src/task/schemas/databaseTaks.schema';

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
      },
    {
      name: createTask.name,
      schema: taskSchema
    }]),
      JwtModule.register({
        secret: process.env.JWT_KEY,
        signOptions:{expiresIn: '1800s'},

      })
      
  ],
  controllers: [UsersController],
  providers:[UsersService, CreateUserEvaluate, updateUser, updatePass, loginUsers, tasks]
})
export class UsersModule {}
