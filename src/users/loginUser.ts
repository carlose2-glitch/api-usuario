import { InjectModel } from "@nestjs/mongoose";
import { createUser, UserDocument } from "./databaseUser.schema";
import { Model } from "mongoose";
import { loginUser } from "src/dto/Loginuser.dto";
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Res} from "@nestjs/common";





export class loginUsers{

    constructor(@InjectModel(createUser.name) private LoginDocument: Model<UserDocument>, private jwtAuthService: JwtService){}


    async loginSearch( login: loginUser){

        const findUser = await this.LoginDocument.findOne({user:login.user})
        

        if(!findUser){
            return 'Usuario no existe';
        }

        const checkPassword = await compare(login.password, findUser.password);

        if(checkPassword){

            console.log(findUser);

            const payload = {
                id: findUser._id,
                name: findUser.name,
                
            }

            const token = this.jwtAuthService.sign(payload);

            const data = await this.jwtAuthService.verifyAsync(token, { secret: process.env.JWT_KEY});

     

            return data;
        }

        return 'Contraseña incorrecta';

    }
}