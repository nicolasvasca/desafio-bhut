import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WebhooksService } from '../../aplication/services/webhooks.service';
import { WebHookGateway } from '../gateways/WebHookGateway';
import { IWebHookGateway } from '../../aplication/ports/IWebHookGateway';

@Module({
  imports: [HttpModule],
  providers: [
    WebhooksService,
    {
      provide: IWebHookGateway,
      useClass: WebHookGateway,
    },
  ],
  exports: [WebhooksService],
})
export class WebhooksModule {}
