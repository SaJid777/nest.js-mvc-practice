import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getCustom')
  @Render('index')
  getCustom() {
    return { message: 'Custom world!', message1: 'asdasdasd' };
  }

  @Get('getCustom2')
  @Render('index')
  getCustom2() {
    return { message: 'Custom world!', message1: 'asdasdasd2', nav: [{ url: "foo", test: true, title: "bar" }, { url: "bar" }] };
  }

  @Post('getCustom2')
  @Render('index')
  getCustom2Post() {
    return { message: 'Custom world!', message1: 'asdasdasd2', nav: [{ url: "foo", test: true, title: "bar" }, { url: "bar" }] };
  }
}