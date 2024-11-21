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
import { Response } from "express";

@Injectable()
export class UsersService{
    constructor(@InjectModel(createUser.name) private UserDocument:Model<UserDocument>, private Evaluate: CreateUserEvaluate, private Update: updateUser, private UpdatePass: updatePass, private LoginUsers: loginUsers){
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

    async getToken( response: Response, token:string){

        return {token};

    }

}