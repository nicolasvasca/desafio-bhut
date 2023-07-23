import { Injectable } from '@nestjs/common';
import { IBhutGateway } from '../ports/IBhutGateway';
import { CarDto } from '../../presentantion/dtos/cars/car.dto';
import { CreateCarDto } from '../../presentantion/dtos/cars/create-car.dto';
import { LogsService } from './logs.service';

@Injectable()
export class CarsService {
  constructor(
    private readonly bhutGateway: IBhutGateway,
    private readonly logsService: LogsService,
  ) {}

  async listCars(): Promise<CarDto[]> {
    const cars = await this.bhutGateway.listCars();
    return cars;
  }

  async create(data: CreateCarDto): Promise<CarDto> {
    const car = await this.bhutGateway.createCar(data);
    await this.logsService.create(car.id);
    return car;
  }
}
