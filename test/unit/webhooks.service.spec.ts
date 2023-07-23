import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksService } from '../../src/aplication/services/webhooks.service';
import MockWebHookGateway from './__mocks__/MockWebHook';
import { IWebHookGateway } from '../../src/aplication/ports/IWebHookGateway';
import MockHttpService from './__mocks__/MockHttpService';
import { HttpService } from '@nestjs/axios';
import MockCars from './__mocks__/MockCars';

describe('WebhooksService', () => {
  let service: WebhooksService;
  const mockWebHookGateway = MockWebHookGateway.mockWebHookGateway();
  const mockHttpService = MockHttpService.mockHttpService();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebhooksService,
        {
          provide: IWebHookGateway,
          useValue: mockWebHookGateway,
        },
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<WebhooksService>(WebhooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When Car Create', () => {
    it('should be create order', async () => {
      const carDto = MockCars.mockCarDto();
      await service.createOrder(carDto);
      expect(mockWebHookGateway.sendNotification).toBeCalledTimes(1);
    });
  });
});
