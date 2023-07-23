import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LogDocument = HydratedDocument<Log>;

@Schema()
export class Log {
  @Prop()
  car_id: string;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);
