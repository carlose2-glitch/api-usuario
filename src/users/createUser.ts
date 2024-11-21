import { InjectModel } from "@nestjs/mongoose";
import { createUserDto } from "src/dto/User.dto";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { hash } from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";




export class CreateUserEvaluate {

    constructor(@InjectModel(createUser.name) private UserDocument: Model<UserDocument>, private jwtAuthService: JwtService){}
    

    async evaluate(create: createUserDto, response: Response){

        const findUserCi = await this.UserDocument.find({ci:create.ci});
       
        const findUserUser = await this.UserDocument.find({user:create.user});
//Solo la primera letra debe ser mayuscula terminar con caracter especial y max debe tener una longitud de 8 caracteres
        const userRegex = /^([A-Z][a-z0-9]{1,6}[#*_.$!+-/\\"\[\]\?\¿!¡])$/;

        const evaluateRegex = userRegex.test(create.user);
        const evaluatePass = userRegex.test(create.password);


        console.log(evaluateRegex, evaluatePass);
        if(findUserCi[0] !== undefined || findUserUser[0] !== undefined){
         
            return 'La cedula o el usuario ya existe'
        }

       const passwordBcrypt = await hash(create.password, 10);


        if(evaluateRegex && evaluatePass){
            create = {...create, password: passwordBcrypt};

           const data = await this.UserDocument.create(create);

           const payload = {
            id: data._id,
            name: data.name
           }

           const token = this.jwtAuthService.sign(payload);

           return {
            r: 'Usuario creado',
            token: token
           }
        }else{
            return 'El Usuario y la clave solo la primera letra debe ser mayuscula terminar con caracter especial y max debe tener una longitud de 8 caracteres';
        }

    }
}


