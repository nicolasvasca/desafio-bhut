import { BaseCarDto } from './base-car.dto';

export class CreateCarDto extends BaseCarDto {
  readonly title: string;
  readonly brand: string;
  readonly price: string;
  readonly age: number;

  constructor(title: string, brand: string, price: string, age: number) {
    super(title, brand, price, age);
  }
}
