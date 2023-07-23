import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CarDto } from '../../presentantion/dtos/car/car.dto';
import { IWebHookGateway } from '../../aplication/ports/IWebHookGateway';

@Injectable()
export class WebHookGateway extends IWebHookGateway {
  private readonly weebHookUrl: string;
  constructor(private readonly httpService: HttpService) {
    super();
    this.weebHookUrl = process.env.BHUT_URL;
  }

  async sendNotification(carDto: CarDto): Promise<void> {
    await this.httpService.post(`${this.weebHookUrl}`, carDto).subscribe({
      complete: () => {
        console.log('notification received');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
