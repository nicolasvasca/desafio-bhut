import { CarDto } from '../../presentantion/dtos/car/car.dto';

export abstract class IWebHookGateway {
  abstract sendNotification(carDto: CarDto): Promise<void>;
}
