/* eslint-disable prettier/prettier */
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUniversityDto {
  @Type(() => String)
  @ValidateNested()
  readonly name: string;

  @Type(() => String)
  @ValidateNested()
  readonly city: string;

  @Type(() => String)
  @ValidateNested()
  readonly state: string;
}
