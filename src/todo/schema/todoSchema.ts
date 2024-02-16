import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  dueDate: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

export type MusicsDocument = Task & Document;
