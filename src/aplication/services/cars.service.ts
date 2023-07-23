import { Injectable } from '@nestjs/common';
import { IBhutGateway } from '../ports/IBhutGateway';
import { CarDto } from '../../presentantion/dtos/cars/car.dto';
import { CreateCarDto } from '../../presentantion/dtos/cars/create-car.dto';

@Injectable()
export class CarsService {
  constructor(private readonly bhutGateway: IBhutGateway) {}

  async listCars(): Promise<CarDto[]> {
    const cars = await this.bhutGateway.listCars();
    return cars;
  }

  async create(data: CreateCarDto): Promise<CarDto> {
    const car = await this.bhutGateway.createCar(data);
    return car;
  }
}
