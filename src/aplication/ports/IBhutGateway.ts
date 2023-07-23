import { CreateCarDto } from '../../presentantion/dtos/car/create-car.dto';
import { CarDto } from '../../presentantion/dtos/car/car.dto';

export abstract class IBhutGateway {
  abstract listCars(): Promise<CarDto[]>;

  abstract createCar(data: CreateCarDto): Promise<CarDto>;
}
