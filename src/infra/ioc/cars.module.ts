import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CarsService } from '../../aplication/services/cars.service';
import { CarsController } from '../../presentantion/controllers/cars.controller';
import { BhutGateway } from '../gateways/BhutGateway';
import { IBhutGateway } from 'src/aplication/ports/IBhutGateway';
import { LogsModule } from './logs.module';
import { WebhooksModule } from './webhooks.module';

@Module({
  imports: [HttpModule, LogsModule, WebhooksModule],
  providers: [
    CarsService,
    {
      provide: IBhutGateway,
      useClass: BhutGateway,
    },
  ],
  controllers: [CarsController],
  exports: [CarsService],
})
export class CarsModule {}
