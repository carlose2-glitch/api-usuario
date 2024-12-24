import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskCreateDocument = HydratedDocument<createTask>;

@Schema()
export class createTask {

  @Prop({required: true})
  iduser:string;

  @Prop({required: true})
  task: string;
  
  @Prop({required: true})
  date: string;

  @Prop({required: true})
  theme: string;

  @Prop({required: true})
  check: boolean;
  
}

export const taskSchema = SchemaFactory.createForClass(createTask);