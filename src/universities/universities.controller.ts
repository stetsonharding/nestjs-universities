import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';

@Controller('universities')
export class UniversitiesController {
  @Get()
  findAlluniversities(): string {
    return 'Get all items';
  }

  @Post()
  createUniversity(@Body() _createUniversityDto: CreateUniversityDto): string {
    return `The City Name is: ${_createUniversityDto.city.name}`;
  }
}
