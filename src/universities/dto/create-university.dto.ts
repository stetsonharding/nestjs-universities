/* eslint-disable prettier/prettier */
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class University {
    readonly id: number;
    readonly name: string;
}

class City {
    readonly id: number;
    readonly name: string;
}

class State {
    readonly id: number;
    readonly name: string;
}

export class CreateUniversityDto {
    @Type(() => University)
    @ValidateNested()
    readonly university: University;
   
    @Type(() => City)
    @ValidateNested()
    readonly city: City;

    @Type(() => State)
    @ValidateNested()
    readonly state: State;
}



