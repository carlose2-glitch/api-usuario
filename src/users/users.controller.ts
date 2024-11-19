import { Body, Controller, Delete, Get, Patch, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from 'src/dto/User.dto';
import { updateUserDto } from './dto/update-user.dto';
import { updatePassDto } from './dto/change-Pass-dto';
import { loginUser } from 'src/dto/Loginuser.dto';
import { Response } from 'express';

@Controller('/users')
export class UsersController {
 

    constructor(private UsersService: UsersService){}
  //obtener todos los usuarios
  @Get()
  getAllUsers(@Res({passthrough: true}) response: Response) {

    return this.UsersService.getUsers();
  }
//crear usuario
  @Post()
  addUser(@Body() createUser: createUserDto){
    return this.UsersService.createUser(createUser);
  }
//obtener usuario

  @Post('/login')
    login(@Body() login: loginUser, @Res({passthrough: true}) response: Response){
      
      const data = this.UsersService.loginUser(login);

      response.cookie('value', 'aaaaa');
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

  @Patch('/pass')
  updatePass(@Body() data: updatePassDto){
    return this.UsersService.updatePass(data);
  }

}
