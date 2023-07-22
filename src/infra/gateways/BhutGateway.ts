import { Injectable } from '@nestjs/common';
import { IBhutGateway } from '../../aplication/ports/IBhutGateway';
import { CarDto } from '../../presentantion/dtos/cars/car.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BhutGateway extends IBhutGateway {
  private readonly bhutUrl: string;
  constructor(private readonly httpService: HttpService) {
    super();
    this.bhutUrl = process.env.BHUT_URL;
  }

  static setHeader(): object {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  async listCars(): Promise<CarDto[]> {
    const response = await this.httpService
      .get(`${this.bhutUrl}/cars`, {
        headers: BhutGateway.setHeader(),
      })
      .toPromise();
    return response.data
      ? response.data?.map((car) => {
          return new CarDto(car._id, car.title, car.brand, car.price, car.age);
        })
      : [];
  }
}
