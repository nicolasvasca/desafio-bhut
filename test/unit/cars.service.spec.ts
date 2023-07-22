import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../src/aplication/services/cars.service';
import { IBhutGateway } from '../../src/aplication/ports/IBhutGateway';
import { HttpModule, HttpService } from '@nestjs/axios';
import MockBhutGateway from './__mocks__/MockBhutGateway';
import MockHttpService from './__mocks__/MockHttpService';
import MockCar from './__mocks__/MockCars';

describe('CarsService', () => {
  let service: CarsService;
  const mockBhutGateway = MockBhutGateway.mockBhutGateway();
  const mockHttpService = MockHttpService.mockHttpService();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        CarsService,
        {
          provide: IBhutGateway,
          useValue: mockBhutGateway,
        },
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When List Cars', () => {
    it('should list cars', async () => {
      const carDto = MockCar.mockCarDto();
      const responseGateway = MockBhutGateway.mockGetBhutGatewayReturn();
      mockHttpService.get.mockResolvedValue([responseGateway]);
      const cars = await service.listCars();
      expect(cars).toEqual([carDto]);
      expect(mockBhutGateway.listCars).toBeCalledTimes(1);
    });
  });
});
