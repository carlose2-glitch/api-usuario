import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { updatePassDto } from "./dto/change-Pass-dto";




export class updatePass {

    constructor(@InjectModel(createUser.name) private Database: Model<UserDocument>){}


    async updatePass(updatePass: updatePassDto){

        const userRegex = /^([A-Z][a-z0-9]{1,6}[#*_.$!+-/\\"\[\]\?\¿!¡])$/;
    
        const user = { user: updatePass.user};
    
        const verificationPassRegex = userRegex.test(updatePass.password);


        if(verificationPassRegex){


          const result =  await this.Database.findOneAndUpdate(user, {
                password:updatePass.password
            });

            const r = result !== null ? 'ok' : 'El Usuario no existe'; 
            return r;

        }

            return 'El Usuario y la clave solo la primera letra debe ser mayuscula terminar con caracter especial y max debe tener una longitud de 8 caracteres';
    }




}