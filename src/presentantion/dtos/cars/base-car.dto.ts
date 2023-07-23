import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BaseCarDto {
  @ApiProperty({
    type: String,
    description: 'Car Title',
    example: 'Prisma',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @Expose()
  readonly title: string;

  @ApiProperty({
    type: String,
    description: 'Car Brand',
    example: 'VW',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Brand is required' })
  @Expose()
  readonly brand: string;

  @ApiProperty({
    type: String,
    description: 'String Car Price',
    example: '8200',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty({ message: 'Price is required' })
  @Expose()
  readonly price: string;

  @ApiProperty({
    type: Number,
    description: 'Car Age',
    example: 2020,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty({ message: 'Age is required' })
  @Expose()
  readonly age: number;

  constructor(title: string, brand: string, price: string, age: number) {
    this.title = title;
    this.brand = brand;
    this.price = price;
    this.age = age;
  }
}
