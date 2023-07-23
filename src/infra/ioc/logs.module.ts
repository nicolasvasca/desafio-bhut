import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsService } from '../../aplication/services/logs.service';
import { LogsController } from '../../presentantion/controllers/logs.controller';
import { Log, LogSchema } from '../../domain/models/log.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  providers: [LogsService],
  controllers: [LogsController],
  exports: [LogsService],
})
export class LogsModule {}
