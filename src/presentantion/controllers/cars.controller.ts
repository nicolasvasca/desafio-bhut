import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CarsService } from '../../aplication/services/cars.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarDto } from '../dtos/car/car.dto';
import { CreateCarDto } from '../dtos/car/create-car.dto';

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

  @Post('')
  @ApiBody({
    description: 'Cars parameters',
    type: CreateCarDto,
  })
  @ApiResponse({
    description: 'List All Cars',
    status: HttpStatus.OK,
    type: CarDto,
  })
  async create(@Body() data: CreateCarDto): Promise<CarDto> {
    const car = await this.carsService.create(data);
    return car;
  }
}
