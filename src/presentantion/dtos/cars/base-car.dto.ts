import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class BaseCarDto {
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
    example: '8200',
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

  constructor(title: string, brand: string, price: string, age: number) {
    this.title = title;
    this.brand = brand;
    this.price = price;
    this.age = age;
  }
}
