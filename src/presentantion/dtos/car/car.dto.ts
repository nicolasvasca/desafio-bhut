import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { BaseCarDto } from './base-car.dto';

export class CarDto extends BaseCarDto {
  @ApiProperty({
    type: String,
    description: 'Car id in Bhut API',
    example: '643c759e94a4c4001c3e19d4',
  })
  @IsString()
  @Expose()
  readonly id: string;

  constructor(
    id: string,
    title: string,
    brand: string,
    price: string,
    age: number,
  ) {
    super(title, brand, price, age);
    this.id = id;
  }
}
