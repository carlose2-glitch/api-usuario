import { InjectModel } from "@nestjs/mongoose";
import { createUserDto } from "src/dto/User.dto";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";



export class CreateUserEvaluate {

    constructor(@InjectModel(createUser.name) private UserDocument: Model<UserDocument>){}
    

    async evaluate(create: createUserDto){

        const findUserCi = await this.UserDocument.find({ci:create.ci});
       
        const findUserUser = await this.UserDocument.find({user:create.user})


        if(findUserCi[0] === undefined && findUserUser[0] === undefined){
            await this.UserDocument.create(create);
            return 'Creado con exito';
        }
        return 'La cedula o el usuario ya existe'

        


    }
}


