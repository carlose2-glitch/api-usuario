import { InjectModel } from "@nestjs/mongoose";
import { createTaskUser } from "./dto/create-task.dto";
import { createTask, TaskCreateDocument } from "./schemas/databaseTaks.schema";
import { Model } from "mongoose";
import { updateCheck } from "src/dto/updateCheckTask.dto";



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
    async deleteTask(id:string){

        return this.TaskDocument.deleteOne({_id:id});

    }
    async updateCheck(data: updateCheck){
        
        return this.TaskDocument.findByIdAndUpdate(data.id, {check: data.check});
    }
}