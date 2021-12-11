import { Controller, Get, Post, Request, Render, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

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

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req:any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req:any) {
    return req.user;
  }
}