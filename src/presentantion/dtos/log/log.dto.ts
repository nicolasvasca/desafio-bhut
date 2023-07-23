import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import { IsString } from 'class-validator';
import { BaseLogDto } from './base-log.dto';
import { Log } from '../../../domain/models/log.model';

export class LogDto extends BaseLogDto {
  @ApiProperty({
    type: String,
    description: 'Log Id',
    example: '643c759e94a4c4001c3e19d4',
  })
  @IsString()
  @Expose()
  readonly _id: string;

  constructor(log: Log) {
    super(log);
    Object.assign(
      this,
      plainToClass(Log, log, { excludeExtraneousValues: true }),
    );
  }
}
