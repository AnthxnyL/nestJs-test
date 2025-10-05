import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './Controllers/cats.controller';
import { Cats2Controller } from './Controllers/cats2.controller';
import { CatsService } from './Services/cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, Cats2Controller],
  providers: [AppService, CatsService],
})
export class AppModule {}
