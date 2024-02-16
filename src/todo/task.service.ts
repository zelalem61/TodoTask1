// tasks.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schema/todoSchema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: any): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  async update(id: string, updateTaskDto: any): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
  }

  async delete(id: string): Promise<any> {
    return this.taskModel.findByIdAndRemove(id);
  }
}