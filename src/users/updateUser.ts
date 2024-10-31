import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { updateUserDto } from "./dto/update-user.dto";



export class updateUser {


    constructor(@InjectModel(createUser.name) private Database: Model<UserDocument>){}


    async update(update: updateUserDto){

        const ci = { ci:update.ci};
       
        const reglaRegex = /^([A-Z][a-z0-9]{1,6}[#*_.$!+-/\\"\[\]\?\¿!¡])$/;

        const evaluateUser = reglaRegex.test(update.user);
        const evaluatePass = reglaRegex.test(update.password);
        console.log(update);
        if(evaluateUser && evaluatePass){

            await this.Database.findOneAndUpdate(ci, 
                {
                 name: update.name, 
                 lastname:update.lastname, 
                 user:update.user, 
                 password: update.password
                });
                return 'Actualizacion exitosa';
          
        }
        return 'El Usuario y la clave solo la primera letra debe ser mayuscula terminar con caracter especial y max debe tener una longitud de 8 caracteres';
       
       

    }
}