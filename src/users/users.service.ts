import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { createUserDto } from "src/dto/User.dto";

@Injectable()
export class UsersService{
    constructor(@InjectModel(createUser.name) private UserDocument:Model<UserDocument>){


    }

    getUsers(){
        return ['obteniendo los usuarios'];
    }

    async createUser(createUser: createUserDto){

       const data = await this.UserDocument.create(createUser);
        return data;
    }

}