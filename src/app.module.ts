import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './Test_module/test.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [ TestModule, CoursesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}