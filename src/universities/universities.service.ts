import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './interfaces/university.interface';
import * as fs from 'fs';

@Injectable()
export class UniversitiesService {
  //Reading JSON file.
  private readonly universities = JSON.parse(
    fs.readFileSync(
      __dirname + '\\..\\..\\src\\files\\universities.json',
      'utf8',
    ),
  );

  findAlluniversities(): University[] {
    return this.universities;
  }

  findUniversity(id: number): University {
    return this.universities.universities.find(
      (university) => university.id === id,
    );
  }

  createUniversity(dto: CreateUniversityDto): University {
    const indexID = this.universities.universities.length + 1;

    const newUniversity = {
      id: indexID,
      name: dto.name,
      city: {
        id: indexID,
        name: dto.city,
        state: {
          id: 1,
          name: dto.state,
        },
      },
    };
    this.universities.universities.push(newUniversity);

    return newUniversity;
  }

  UpdateUniversity(
    id: number,
    updatedUniversityDto: UpdateUniversityDto,
  ): University {
    const updated = this.findUniversity(id);
    updated.name = updatedUniversityDto.name;
    updated.city.name = updatedUniversityDto.city;
    updated.city.state.name = updatedUniversityDto.state;

    return updated;
  }
}
