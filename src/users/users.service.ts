import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { createUserDto } from "src/dto/User.dto";
import { CreateUserEvaluate } from "./createUser";

@Injectable()
export class UsersService{
    constructor(@InjectModel(createUser.name) private UserDocument:Model<UserDocument>, private Evaluate: CreateUserEvaluate){
    }

    async getUsers(){

        const data = await this.UserDocument.find({});

        return [data];
    }

    async createUser(createUser: createUserDto){

       const data = await this.Evaluate.evaluate(createUser);
        return data;
    }

}