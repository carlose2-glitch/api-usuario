import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from 'src/dto/User.dto';
import { updateUserDto } from './dto/update-user.dto';
import { updatePassDto } from './dto/change-Pass-dto';

@Controller('/users')
export class UsersController {
 

    constructor(private UsersService: UsersService){}
  //obtener todos los usuarios
  @Get()
  getAllUsers() {
    return this.UsersService.getUsers();
  }
//crear usuario
  @Post()
  addUser(@Body() createUser: createUserDto){
    return this.UsersService.createUser(createUser);
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
