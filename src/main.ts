import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cookieParser())

  const config = new DocumentBuilder()
  .setTitle('Usuarios')
  .setDescription('Usuarios')
  .setVersion('1.0')
  .addTag('Usuarios')
  .build();


  
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, documentFactory);

app.enableCors({
  credentials:true,
  origin:true
});
  await app.listen(3000);

}

bootstrap();
