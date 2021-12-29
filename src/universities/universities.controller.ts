import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';

@Controller('universities')
export class UniversitiesController {
  //Testing Purposes
  //Get all Universities
  @Get()
  findAlluniversities(): string {
    return 'Get all items';
  }

  //Get a single University
  //Takes in an id param, checks to see if an id matches id getting passed in.
  @Get(':id')
  findUniversity(@Param() param): string {
    return `University ${param.id}`;
  }

  //Testing Purposes
  @Post()
  createUniversity(@Body() _createUniversityDto: CreateUniversityDto): string {
    return `The City Name is: ${_createUniversityDto.city.name} id is ${_createUniversityDto.city.id}`;
  }

  //Testing Purposes
  @Put(':id')
  updateUniversity(
    @Body() _updateUniversityDto: CreateUniversityDto,
    @Param('id') id,
  ): string {
    return `Update ${id} - Name: ${_updateUniversityDto.city.name}`;
  }
}
