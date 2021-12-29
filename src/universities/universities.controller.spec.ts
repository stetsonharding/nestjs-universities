//File is used for testing purposes.
import { Test, TestingModule } from '@nestjs/testing';
import { UniversitiesController } from './universities.controller';

describe('UniversitiesController', () => {
  let controller: UniversitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversitiesController],
    }).compile();

    controller = module.get<UniversitiesController>(UniversitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
