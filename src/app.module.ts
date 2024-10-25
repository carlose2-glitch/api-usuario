import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HomeController } from './home/home.controller';
import { HomeModule } from './home/home.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
MongooseModule.forRoot(process.env.URL_MONGO),
    UsersModule, HomeModule ],
  controllers: [HomeController],
})
export class AppModule {}
