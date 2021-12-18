import { Test, TestingModule } from '@nestjs/testing';
import { QuartierController } from './quartier.controller';
import { QuartierService } from './quartier.service';

describe('QuartierController', () => {
  let controller: QuartierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuartierController],
      providers: [QuartierService],
    }).compile();

    controller = module.get<QuartierController>(QuartierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
