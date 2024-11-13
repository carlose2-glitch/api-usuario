import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { loginUser } from "src/dto/Loginuser.dto";




export class loginUsers{

    constructor(@InjectModel(createUser.name) private LoginDocument: Model<UserDocument>){}


    async loginSearch(login: loginUser){

        console.log(this.LoginDocument)

        console.log(login);
        return login;

    }
}