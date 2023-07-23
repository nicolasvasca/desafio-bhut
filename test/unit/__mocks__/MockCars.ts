import { CreateCarDto } from '../../../src/presentantion/dtos/car/create-car.dto';
import { CarDto } from '../../../src/presentantion/dtos/car/car.dto';

export default class MockCars {
  static mockCarDto(): CarDto {
    return new CarDto(
      '643c759e94a4c4001c3e19d4',
      'Prisma',
      'VW',
      '70.000',
      2020,
    );
  }

  static mockCreateCarDto(): CreateCarDto {
    return new CreateCarDto('Prisma', 'VW', '70.000', 2020);
  }
}
