import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { createUser, usersSchema } from './databaseUser.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: createUser.name, 
        schema: usersSchema 
      }])
  ],
  controllers: [UsersController],
  providers:[UsersService]
})
export class UsersModule {}
