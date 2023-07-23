import { Controller, Get, HttpStatus } from '@nestjs/common';
import { LogsService } from '../../aplication/services/logs.service';
import { LogDto } from '../dtos/log/log.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Log } from '../../domain/models/log.model';

@ApiTags('Logs')
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('')
  @ApiResponse({
    description: 'List All Logs',
    status: HttpStatus.OK,
    type: [LogDto],
  })
  async find(): Promise<Log[]> {
    const logs = await this.logsService.find();
    return logs;
  }
}
