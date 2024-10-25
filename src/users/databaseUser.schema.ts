import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<createUser>;

@Schema()
export class createUser {
  
  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  user: string;

   @Prop()
  password: string;
  
}

export const usersSchema = SchemaFactory.createForClass(createUser);