import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './Test_module/test.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [ TypeOrmModule.forRoot(), TestModule, CoursesModule, AuthModule, UsersModule, MoviesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}