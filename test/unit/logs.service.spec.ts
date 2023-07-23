import { Test, TestingModule } from '@nestjs/testing';
import { LogsService } from '../../src/aplication/services/logs.service';
import { getModelToken } from '@nestjs/mongoose';
import MockRepository from './__mocks__/MockRepository';
import MockLogs from './__mocks__/MockLogs';

describe('LogsService', () => {
  let service: LogsService;
  const mockLogRepository = MockRepository.mockRepository();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogsService,
        {
          provide: getModelToken('Log'),
          useValue: mockLogRepository,
        },
      ],
    }).compile();

    service = module.get<LogsService>(LogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When create log', () => {
    it('should be create a planet', async () => {
      const log = MockLogs.mockLog();
      mockLogRepository.create.mockReturnValue(log);
      const savedLog = await service.create('643c759e94a4c4001c3e19d4');

      expect(savedLog).toMatchObject(log);
      expect(mockLogRepository.create).toBeCalledTimes(1);
    });
  });
});
