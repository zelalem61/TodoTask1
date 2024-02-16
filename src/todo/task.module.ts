import { Module } from '@nestjs/common';
import { Task, TaskSchema } from './schema/todoSchema';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { TasksController } from './task.controller';
import { TasksService } from './task.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Task.name , schema: TaskSchema}]),], 
    controllers: [TasksController],
    providers: [TasksService],
})
export class TodoModule {}





@Module({
    imports: [MongooseModule.forFeature([{name: Musics.name , schema: MusicsSchema}]), UsersModule, Music], // Include the imported UserModel
    controllers: [MusicController],
    providers: [MusicService],
  })
