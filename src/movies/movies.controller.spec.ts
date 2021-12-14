import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

describe('MoviesController', () => {
  let controller: MoviesController;
  let provider: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            insertMovie: jest.fn((x) => x),
            allMovie: jest.fn((x) => x),
            categoryMovie: jest.fn((x) => x),
            findOne: jest.fn((x) => x),
            updateMovie: jest.fn((x) => x),
            deleteMovie: jest.fn((x) => x),
          },
        },
      ],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    provider = module.get<MoviesService>(MoviesService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Provider should be defined', () => {
    expect(provider).toBeDefined();
  });
});
