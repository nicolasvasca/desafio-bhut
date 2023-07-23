import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Log } from '../../domain/models/log.model';

@Injectable()
export class LogsService {
  constructor(@InjectModel(Log.name) private logModel: Model<Log>) {}

  async create(carId: string): Promise<Log> {
    const createdLog = this.logModel.create({ car_id: carId });
    return createdLog;
  }
}
