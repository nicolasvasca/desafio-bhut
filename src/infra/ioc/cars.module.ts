import { Module } from '@nestjs/common';
import { CarsService } from '../../aplication/services/cars.service';
import { CarsController } from '../../presentantion/controllers/cars.controller';

@Module({
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
