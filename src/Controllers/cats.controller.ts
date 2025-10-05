import { Controller, Get, Header, Param, Post, Redirect, Req, Body, Query, Put, Delete } from '@nestjs/common';
import type { Request } from 'express';
import { CreateCatDto, UpdateCatDto } from 'src/Modules/cats/dto';

@Controller('cats')
export class CatsController {
  @Get('all')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get()
  async findFiltered(@Query('age') age: number, @Query('breed') breed: string){
    return `This action filtered cats by breed : ${breed} and age : ${age}`;
  }

  @Get('breed')
  findByBreed() {
    return 'This action return by breeds';
  }

  @Get('redirect')
  @Redirect(`https://nestjs.com`, 301)
  getDocs() {
    // Cette méthode ne sera jamais exécutée à cause de la redirection
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action return cat with the id : ${id}`;
  }

  @Post()
  @Header('Cache-control', 'no-store')
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action create a cat';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto : UpdateCatDto) {
    return `This action edit cat ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action remove cat : ${id}`;
  }
}
