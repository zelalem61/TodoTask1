import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './todo/task.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/task'),TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
