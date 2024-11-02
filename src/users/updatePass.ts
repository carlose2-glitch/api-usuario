import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { updatePassDto } from "./dto/change-Pass-dto";




export class updatePass {

    constructor(@InjectModel(createUser.name) private Database: Model<UserDocument>){}


    async updatePass(updatePass: updatePassDto){


        const user = { user: updatePass.user};
        
        await this.Database.findOneAndUpdate(user, {
            password:updatePass.password
        });


        return 'ok'
    }




}