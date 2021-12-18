import { Test, TestingModule } from '@nestjs/testing';
import { QuartierService } from './quartier.service';

describe('QuartierService', () => {
  let service: QuartierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuartierService],
    }).compile();

    service = module.get<QuartierService>(QuartierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
