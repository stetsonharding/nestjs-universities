import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
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
  findUniversity(@Param('id') id: string): University {
    return this.universitiesService.findUniversity(parseInt(id));
  }

  //Creates a university
  @Post()
  createUniversity(
    @Body() _createUniversityDto: CreateUniversityDto,
  ): University {
    return this.universitiesService.createUniversity(_createUniversityDto);
  }

  //Updates University
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() _updateUniveristy: UpdateUniversityDto,
  ): University {
    return this.universitiesService.UpdateUniversity(
      parseInt(id),
      _updateUniveristy,
    );
  }
}
