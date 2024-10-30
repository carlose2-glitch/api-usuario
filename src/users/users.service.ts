import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { createUserDto } from "src/dto/User.dto";
import { CreateUserEvaluate } from "./createUser";
import { updateUser } from "./updateUser";
import { updateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService{
    constructor(@InjectModel(createUser.name) private UserDocument:Model<UserDocument>, private Evaluate: CreateUserEvaluate, private Update: updateUser){
    }

    async getUsers(){

        const data = await this.UserDocument.find({});

        return [data];
    }

    async createUser(createUser: createUserDto){

       const data = await this.Evaluate.evaluate(createUser);
        return data;
    }

    async updated(dat: updateUserDto) {

        const data = await this.Update.update(dat);

        return data;
        
    }

}