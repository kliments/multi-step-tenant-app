import { Test, TestingModule } from '@nestjs/testing';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { Tenant } from './tenant.entity';

describe('TenantController', () => {
  let tenantController: TenantController;
  let tenantService: TenantService;

  const mockTenantService = {
    createTenant: jest.fn((dto: Partial<Tenant>) => ({
      id: 1,
      ...dto,
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantController],
      providers: [
        {
          provide: TenantService,
          useValue: mockTenantService,
        },
      ],
    }).compile();

    tenantController = module.get<TenantController>(TenantController);
    tenantService = module.get<TenantService>(TenantService);
  });

  it('should be defined', () => {
    expect(tenantController).toBeDefined();
  });

  describe('create', () => {
    it('should create a tenant and return the tenant', async () => {
      const createTenantDto: Partial<Tenant> = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        income: '50000',
      };

      const result = await tenantController.create(createTenantDto);
      expect(result).toEqual({ id: 1, ...createTenantDto });
      expect(tenantService.createTenant).toHaveBeenCalledWith(createTenantDto);
    });
  });
});
