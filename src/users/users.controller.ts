import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from 'src/dto/User.dto';

@Controller({})
export class UsersController {
 

    constructor(private UsersService: UsersService){}
  
  @Get('/users')
  getAllUsers() {
    return this.UsersService.getUsers();
  }

  @Post('/users')
  addUser(@Body() createUser: createUserDto){
    return this.UsersService.createUser(createUser);
  }
 
  @Put('/users')
  updateUsers(){
    return 'actualizando usuario'
  }

  @Delete('/users')
  deleteUsers(){
    return 'borrando usuario'
  }

  @Patch('/users')
  upateUsersSatus(){
    return 'actualizar parte especifica del usuario'
  }

}
