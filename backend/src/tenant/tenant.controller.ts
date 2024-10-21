import { Controller, Post, Body } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { Tenant } from './tenant.entity';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  async create(@Body() createTenantDto: Partial<Tenant>) {
    return this.tenantService.createTenant(createTenantDto);
  }
}
