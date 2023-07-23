import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import { IsString } from 'class-validator';
import { Log } from '../../../domain/models/log.model';

export class BaseLogDto {
  @ApiProperty({
    type: String,
    description: 'Car id in Bhut API',
    example: '643c759e94a4c4001c3e19d4',
  })
  @IsString()
  @Expose()
  readonly car_id: string;

  @ApiProperty({
    type: Date,
    description: 'Create Log Date',
    example: '2023-07-23T01:31:08.390+00:00',
  })
  @Expose()
  readonly create_at: string;

  constructor(log: Log) {
    Object.assign(
      this,
      plainToClass(Log, log, { excludeExtraneousValues: true }),
    );
  }
}
