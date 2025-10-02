import { Controller, Get } from '@nestjs/common';
import { AppService } from '@app/services';
import type { GetHelloWorldResponse } from '@app/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/hello')
  getHello(): GetHelloWorldResponse {
    const message = this.appService.getHello()

    return { message };
  }
}
