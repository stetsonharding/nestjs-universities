import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UniversitiesService } from './universities.service';
import { University } from './interfaces/university.interface';

@Controller('universities')
export class UniversitiesController {
  //inject dependency
  constructor(private readonly universitiesService: UniversitiesService) {}

  //Get all Universities
  @Get()
  findAlluniversities(): University[] {
    return this.universitiesService.findAlluniversities();
  }

  //Get a single University
  //Takes in an id param, checks to see if an id matches id getting passed in
  @Get(':id')
  findUniversity(@Param('id') id): University {
    return this.universitiesService.findUniversity(id);
  }

  //Creates a university
  @Post()
  createUniversity(
    @Body() _createUniversityDto: CreateUniversityDto,
  ): University {
    return this.universitiesService.createUniversity(_createUniversityDto);
  }

  //Testing Purposes
  // @Put(':id')
  // updateUniversity(
  //   @Body() _updateUniversityDto: CreateUniversityDto,
  //   @Param('id') id,
  // ): string {
  //   return `Update ${id} - Name: ${_updateUniversityDto.city.name}`;
  // }
}
