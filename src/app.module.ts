import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/task')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
