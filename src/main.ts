import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe());

  var hbs = require('hbs');

hbs.registerHelper('ifCond', function(v1:any, v2:any, options:any) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
  
  await app.listen(3000);
}
bootstrap();