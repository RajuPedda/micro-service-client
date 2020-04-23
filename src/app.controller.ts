import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  getHello(@Payload() data: any) {
    return this.appService.getHello(data);
  }

  @Post('/register')
  getRegister(@Payload() data: any) {
    return this.appService.getRegister(data);
  }
}
