import { Injectable } from '@nestjs/common';
import { IBhutGateway } from '../ports/IBhutGateway';
import { CarDto } from '../../presentantion/dtos/cars/car.dto';

@Injectable()
export class CarsService {
  constructor(private readonly bhutGateway: IBhutGateway) {}

  async listCars(): Promise<CarDto[]> {
    const cars = await this.bhutGateway.listCars();
    return cars;
  }
}
