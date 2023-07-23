import { CreateCarDto } from '../../presentantion/dtos/cars/create-car.dto';
import { CarDto } from '../../presentantion/dtos/cars/car.dto';

export abstract class IBhutGateway {
  abstract listCars(): Promise<CarDto[]>;

  abstract createCar(data: CreateCarDto): Promise<CarDto>;
}
