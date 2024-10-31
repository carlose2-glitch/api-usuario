import { InjectModel } from "@nestjs/mongoose";
import { createUserDto } from "src/dto/User.dto";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";



export class CreateUserEvaluate {

    constructor(@InjectModel(createUser.name) private UserDocument: Model<UserDocument>){}
    

    async evaluate(create: createUserDto){

        const findUserCi = await this.UserDocument.find({ci:create.ci});
       
        const findUserUser = await this.UserDocument.find({user:create.user});
//Solo la primera letra debe ser mayuscula terminar con caracter especial y max debe tener una longitud de 8 caracteres
        const userRegex = /^([A-Z][a-z0-9]{1,6}[#*_.$!+-/\\"\[\]\?\¿!¡])$/;

        const evaluateRegex = userRegex.test(create.user && create.password);


        console.log(evaluateRegex);
        if(findUserCi[0] !== undefined || findUserUser[0] !== undefined){
         
            return 'La cedula o el usuario ya existe'
        }

        if(evaluateRegex){
            await this.UserDocument.create(create);
        }else{
            return 'El Usuario y la clave solo la primera letra debe ser mayuscula terminar con caracter especial y max debe tener una longitud de 8 caracteres';
        }

    }
}


