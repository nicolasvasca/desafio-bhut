import { Injectable } from '@nestjs/common';
import { IWebHookGateway } from '../ports/IWebHookGateway';
import { CarDto } from '../../presentantion/dtos/car/car.dto';

@Injectable()
export class WebhooksService {
  constructor(private readonly webHookGateway: IWebHookGateway) {}

  createOrder(carDto: CarDto): void {
    this.webHookGateway.sendNotification(carDto);
  }
}
