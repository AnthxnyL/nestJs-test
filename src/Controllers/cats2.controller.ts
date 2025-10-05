import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from 'src/Modules/cats/dto';
import { CatsService } from 'src/Services/cats/cats.service';
import { Cat } from '../Interfaces/cat.interface';

@Controller('cats2')
export class Cats2Controller {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
