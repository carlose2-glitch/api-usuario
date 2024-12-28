import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { createUserDto } from "src/dto/User.dto";
import { CreateUserEvaluate } from "./createUser";
import { updateUser } from "./updateUser";
import { updateUserDto } from "./dto/update-user.dto";
import { updatePassDto } from "./dto/change-Pass-dto";
import { updatePass } from "./updatePass";
import { loginUser } from "src/dto/Loginuser.dto";
import { loginUsers } from "./loginUser";
//import { Response } from "express";

import { createTaskUser } from "src/task/dto/create-task.dto";
import { tasks } from "src/task/createTaks";
import { updateCheck } from "src/dto/updateCheckTask.dto";


@Injectable()
export class UsersService{
    constructor(@InjectModel(createUser.name) private UserDocument:Model<UserDocument>, private Evaluate: CreateUserEvaluate, private Update: updateUser, private UpdatePass: updatePass, private LoginUsers: loginUsers, private CreateTask: tasks,){
    }

    async getUsers(){
//extrae los datos de la db
        const data = await this.UserDocument.find({});

        return [data];
    }

    async createUser(createUser: createUserDto, response: any){

       const data = await this.Evaluate.evaluate(createUser, response);
        return data;
    }

    async loginUser(login: loginUser){


        const data = await this.LoginUsers.loginSearch(login);

        return data;
    }

    async updated(dat: updateUserDto) {

        const data = await this.Update.update(dat);

        return data;

    }

    async updatePass(data: updatePassDto){
        const result = await this.UpdatePass.updatePass(data);

        return result;
    }
    async Task(data: createTaskUser){
        const result = await this.CreateTask.createTask(data);
        return result;
    }
    async getTasks (id: string){




        return this.CreateTask.getAllTasks(id);

    }
    async deleteTask(id:string){

        return this.CreateTask.deleteTask(id);

    }
    async ModifyCheckValue (data: updateCheck){

       

        return this.CreateTask.updateCheck(data) ;

    }

}