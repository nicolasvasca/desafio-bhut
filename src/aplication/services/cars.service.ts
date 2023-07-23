import { Injectable } from '@nestjs/common';
import { IBhutGateway } from '../ports/IBhutGateway';
import { CarDto } from '../../presentantion/dtos/car/car.dto';
import { CreateCarDto } from '../../presentantion/dtos/car/create-car.dto';
import { LogsService } from './logs.service';
import { WebhooksService } from './webhooks.service';

@Injectable()
export class CarsService {
  constructor(
    private readonly bhutGateway: IBhutGateway,
    private readonly logsService: LogsService,
    private readonly webHooksService: WebhooksService,
  ) {}

  async listCars(): Promise<CarDto[]> {
    const cars = await this.bhutGateway.listCars();
    return cars;
  }

  async create(data: CreateCarDto): Promise<CarDto> {
    const car = await this.bhutGateway.createCar(data);
    await this.logsService.create(car.id);
    await this.webHooksService.createOrder(car);
    return car;
  }
}
