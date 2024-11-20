import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<createUser>;

@Schema()
export class createUser {

  @Prop({required: true})
  ci: number;
  
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  lastname: string;

  @Prop({required: true})
  user: string;

  @Prop({required: true})
  password: string;
  
}

export const usersSchema = SchemaFactory.createForClass(createUser);