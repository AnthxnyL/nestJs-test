import { Controller, Get, Header, HttpCode, Param, Post, Redirect, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
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
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action return cat with the id : ${params.id}`;
  }

  @Post()
  @Header('Cache-control', 'no-store')
  create(): string {
    return 'This action create a cat';
  }
}
