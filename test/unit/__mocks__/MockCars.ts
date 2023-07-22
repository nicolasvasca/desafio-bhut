import { CarDto } from '../../../src/presentantion/dtos/cars/car.dto';

export default class MockCar {
  static mockCarDto(): CarDto {
    return new CarDto(
      '643c759e94a4c4001c3e19d4',
      'Prisma',
      'VW',
      '70.000',
      2020,
    );
  }
}
