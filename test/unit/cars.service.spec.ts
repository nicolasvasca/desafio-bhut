import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from '../../src/aplication/services/cars.service';
import { IBhutGateway } from '../../src/aplication/ports/IBhutGateway';
import { HttpModule, HttpService } from '@nestjs/axios';
import MockBhutGateway from './__mocks__/MockBhutGateway';
import MockHttpService from './__mocks__/MockHttpService';
import MockCar from './__mocks__/MockCars';
import { LogsService } from '../../src/aplication/services/logs.service';
import { getModelToken } from '@nestjs/mongoose';
import MockRepository from './__mocks__/MockRepository';

describe('CarsService', () => {
  let service: CarsService;
  const mockBhutGateway = MockBhutGateway.mockBhutGateway();
  const mockHttpService = MockHttpService.mockHttpService();
  const mockLogRepository = MockRepository.mockRepository();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        CarsService,
        LogsService,
        {
          provide: IBhutGateway,
          useValue: mockBhutGateway,
        },
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
        {
          provide: getModelToken('Log'),
          useValue: mockLogRepository,
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
      mockHttpService.get.mockResolvedValue(responseGateway);
      const cars = await service.listCars();
      expect(cars).toEqual([carDto]);
      expect(mockBhutGateway.listCars).toBeCalledTimes(1);
    });
  });

  describe('When Create Car', () => {
    it('should be create a car', async () => {
      const createDto = MockCar.mockCreateCarDto();
      const carDto = MockCar.mockCarDto();
      const responseGateway = MockBhutGateway.mockPostBhutGatewayReturn();
      mockHttpService.post.mockResolvedValue(responseGateway);
      const car = await service.create(createDto);
      expect(car).toEqual(carDto);
      expect(mockBhutGateway.createCar).toBeCalledTimes(1);
      expect(mockLogRepository.create).toBeCalledTimes(1);
    });
  });
});
