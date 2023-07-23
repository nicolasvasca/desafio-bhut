import MockCar from './MockCars';

export default class MockBhutGateway {
  static mockBhutGateway() {
    const car = MockCar.mockCarDto();
    return {
      listCars: jest.fn().mockResolvedValue([car]),
      createCar: jest.fn().mockResolvedValue(car),
    };
  }

  static mockGetBhutGatewayReturn() {
    const cars = [
      {
        _id: '643c759e94a4c4001c3e19d4',
        title: 'Prisma',
        brand: 'VW',
        price: '70.000',
        age: 2020,
      },
    ];
    return cars;
  }

  static mockPostBhutGatewayReturn() {
    const car = {
      _id: '643c759e94a4c4001c3e19d4',
      title: 'Prisma',
      brand: 'VW',
      price: '70.000',
      age: 2020,
    };
    return car;
  }
}
