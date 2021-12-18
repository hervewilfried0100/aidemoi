import { Test, TestingModule } from '@nestjs/testing';
import { PrestataireController } from './prestataire.controller';
import { PrestataireService } from './prestataire.service';

describe('PrestataireController', () => {
  let controller: PrestataireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrestataireController],
      providers: [PrestataireService],
    }).compile();

    controller = module.get<PrestataireController>(PrestataireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
