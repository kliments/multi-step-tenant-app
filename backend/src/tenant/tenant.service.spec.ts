import { Test, TestingModule } from '@nestjs/testing';
import { TenantService } from './tenant.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Tenant } from './tenant.entity';

describe('TenantService', () => {
  let service: TenantService;

  const mockTenantRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TenantService,
        {
          provide: getRepositoryToken(Tenant),
          useValue: mockTenantRepository,
        },
      ],
    }).compile();

    service = module.get<TenantService>(TenantService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTenant', () => {
    it('should create a new tenant', async () => {
      const dto = { name: 'John Doe', email: 'john@example.com', phone: '+123456789012', income: '2000-3000' };
      mockTenantRepository.save.mockResolvedValue(dto);

      const result = await service.createTenant(dto);

      expect(result).toEqual(dto);
      expect(mockTenantRepository.create).toHaveBeenCalledWith(dto);
      expect(mockTenantRepository.save).toHaveBeenCalledWith(dto);
    });
  });
});
