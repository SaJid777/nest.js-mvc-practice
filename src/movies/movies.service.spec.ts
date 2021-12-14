import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

describe('MoviesService', () => {
  let service: MoviesService;
  let moviesRepository: Repository<Movie>;
  const MoviesRepositoryToken = getRepositoryToken(Movie);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ MoviesService,
        {
          provide: MoviesRepositoryToken,
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService); 
    moviesRepository = module.get<Repository<Movie>>(MoviesRepositoryToken); 
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('moviesRepository should be defined', () => {
    expect(moviesRepository).toBeDefined();
  });

  describe('addMovie', () => {
    it('Insert Movie to DB', async () => {
      jest.spyOn(moviesRepository,'create').mockReturnValueOnce({
        id: 1,
        title: 'asdas',
        category: 'Action',
        image: 'asdad',
        year: '2021-12-01',
        isActive: true
      });

      await service.addMovie({
        title: 'asdas',
        category: 'Action',
        image: 'asdad',
        year: '2021-12-01',
      })

      expect(moviesRepository.save).toHaveBeenCalledWith({
        id: 1,
        title: 'asdas',
        category: 'Action',
        image: 'asdad',
        year: '2021-12-01',
        isActive: true
      });

    });
  });
});
