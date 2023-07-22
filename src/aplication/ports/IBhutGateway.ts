import { CarDto } from '../../presentantion/dtos/cars/car.dto';

export abstract class IBhutGateway {
  abstract listCars(): Promise<CarDto[]>;
}
