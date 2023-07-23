import { BadGatewayException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IBhutGateway } from '../../aplication/ports/IBhutGateway';
import { CarDto } from '../../presentantion/dtos/cars/car.dto';
import { CreateCarDto } from '../../presentantion/dtos/cars/create-car.dto';

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
    try {
      const response = await this.httpService
        .get(`${this.bhutUrl}/cars`, {
          headers: BhutGateway.setHeader(),
        })
        .toPromise();
      return response.data
        ? response.data?.map((car) => {
            return new CarDto(
              car._id,
              car.title,
              car.brand,
              car.price,
              car.age,
            );
          })
        : [];
    } catch (error) {
      throw new BadGatewayException('Problem with the bhut API');
    }
  }

  async createCar(data: CreateCarDto): Promise<CarDto> {
    try {
      const response = await this.httpService
        .post(`${this.bhutUrl}/cars`, data, {
          headers: BhutGateway.setHeader(),
        })
        .toPromise();
      return new CarDto(
        response.data._id,
        response.data.title,
        response.data.brand,
        response.data.price,
        response.data.age,
      );
    } catch (error) {
      throw new BadGatewayException('Problem with the bhut API');
    }
  }
}
