import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CarDto {
  @ApiProperty({
    type: String,
    description: 'Car id in Bhut API',
    example: '643c759e94a4c4001c3e19d4',
  })
  @IsString()
  @Expose()
  readonly id: string;

  @ApiProperty({
    type: String,
    description: 'Car Title',
    example: 'Prisma',
  })
  @IsString()
  @Expose()
  readonly title: string;

  @ApiProperty({
    type: String,
    description: 'Car Brand',
    example: 'VW',
  })
  @IsString()
  @Expose()
  readonly brand: string;

  @ApiProperty({
    type: String,
    description: 'String Car Price',
    example: true,
    required: true,
  })
  @IsNumber()
  @Expose()
  readonly price: string;

  @ApiProperty({
    type: Number,
    description: 'Car Age',
    example: 2020,
  })
  @IsNumber()
  @Expose()
  readonly age: number;

  constructor(
    id: string,
    title: string,
    brand: string,
    price: string,
    age: number,
  ) {
    this.id = id;
    this.title = title;
    this.brand = brand;
    this.price = price;
    this.age = age;
  }
}
