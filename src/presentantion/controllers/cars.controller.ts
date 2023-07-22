import { Controller, Get, HttpStatus } from '@nestjs/common';
import { CarsService } from '../../aplication/services/cars.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarDto } from '../dtos/cars/car.dto';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('')
  @ApiResponse({
    description: 'List All Cars',
    status: HttpStatus.OK,
    type: [CarDto],
  })
  async listCars(): Promise<CarDto[]> {
    const cars = await this.carsService.listCars();
    return cars;
  }
}
