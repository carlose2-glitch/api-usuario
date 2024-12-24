import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from 'src/dto/User.dto';
import { updateUserDto } from './dto/update-user.dto';
import { updatePassDto } from './dto/change-Pass-dto';
import { loginUser } from 'src/dto/Loginuser.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { createTaskUser } from 'src/task/dto/create-task.dto';




@Controller('/users')
export class UsersController {
 

    constructor(private UsersService: UsersService, private jwtVerify: JwtService){}
  //obtener todos los usuarios
  @Get()
  getAllUsers(@Res({passthrough: true}) response: Response) {

    return this.UsersService.getUsers();
  }

  @Get('/:token')
 async SaveToken(@Res({passthrough: true}) response: Response, @Param('token') token:string){

    try {
      const r = await this.jwtVerify.verifyAsync(token, {secret: process.env.JWT_KEY

      });

      return r;
    } catch (error) {
      throw new UnauthorizedException('ssadad');
    }

    
   /* response.cookie('jwt', token,{
      expires: new Date(Date.now() + 1000 * 60 * 5),
      httpOnly: true,
      sameSite: 'lax',

    })*/

    
    
  }


//crear usuario
  @Post()
  addUser(@Body() createUser: createUserDto, @Res({passthrough: true}) response: Response){
    
   return this.UsersService.createUser(createUser, response);
  }
//obtener usuario

  @Post('/login')
    login(@Body() login: loginUser, @Res({passthrough: true}) response: Response){
      
     

      const data = this.UsersService.loginUser(login);
      return data;
    }
 
  @Put()
  updateUsers(){
    return 'actualizando usuario'
  }

  @Delete()
  deleteUsers(){
    return 'borrando usuario'
  }
//actualizar usuario
  @Patch()
  upateUsersSatus(@Body() data: updateUserDto){
    return this.UsersService.updated(data);
  }

  //guardar tarea
  @Post('/createTask')
  createTaks(@Body() data: createTaskUser){
    return this.UsersService.Task(data);
  }
  //extrar tareas del usuario
  @Get('/extractTask/:id')
  extractTask(@Param('id') id:string ){
    return this.UsersService.getTasks(id);
  }

  @Patch('/pass')
   updatePass(@Body() data: updatePassDto){
    return this.UsersService.updatePass(data);
  }

}
