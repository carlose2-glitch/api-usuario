import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { updateUserDto } from "./dto/update-user.dto";



export class updateUser {


    constructor(@InjectModel(createUser.name) private Database: Model<UserDocument>){}


    async update(update: updateUserDto){

        const ci = { ci:update.ci};

        const result = await this.Database.findOneAndUpdate(ci, 
            {
             name: update.name, 
             lastname:update.lastname, 
             user:update.user, 
             password: update.password
            });

             console.log(result);

    }
}