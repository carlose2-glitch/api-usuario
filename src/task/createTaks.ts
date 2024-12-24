import { InjectModel } from "@nestjs/mongoose";
import { createTaskUser } from "./dto/create-task.dto";
import { createTask, TaskCreateDocument } from "./schemas/databaseTaks.schema";
import { Model } from "mongoose";



export class tasks{

constructor(@InjectModel(createTask.name) private TaskDocument: Model<TaskCreateDocument>){}
    async createTask(data:createTaskUser){

        const send = {...data}

        const result = await this.TaskDocument.create(send);

        return result;
        
    }
    async getAllTasks(id:string){

        const get = await this.TaskDocument.find({iduser: id});

        return get;

    }
}