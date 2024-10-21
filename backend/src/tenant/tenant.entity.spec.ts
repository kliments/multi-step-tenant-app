import { validate } from 'class-validator';
import { Tenant } from './tenant.entity';

describe('Tenant Entity', () => {
  let tenant: Tenant;

  beforeEach(() => {
    tenant = new Tenant();
  });

  it('should be valid with all required fields', async () => {
    tenant.name = 'John Doe';
    tenant.email = 'john.doe@example.com';
    tenant.phone = '+491234567890';
    tenant.income = '1000-2000';

    const errors = await validate(tenant);
    expect(errors.length).toBe(0);
  });

  it('should fail validation if name is empty', async () => {
    tenant.email = 'john.doe@example.com';
    tenant.phone = '+491234567890';
    tenant.income = '1000-2000';

    const errors = await validate(tenant);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('name');
  });

  it('should fail validation if email is invalid', async () => {
    tenant.name = 'John Doe';
    tenant.email = 'invalid-email';
    tenant.phone = '+491234567890';
    tenant.income = '1000-2000';

    const errors = await validate(tenant);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('email');
  });

  it('should fail validation if phone is empty', async () => {
    tenant.name = 'John Doe';
    tenant.email = 'john.doe@example.com';
    tenant.income = '1000-2000';

    const errors = await validate(tenant);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('phone');
  });

  it('should fail validation if income is empty', async () => {
    tenant.name = 'John Doe';
    tenant.email = 'john.doe@example.com';
    tenant.phone = '+491234567890';

    const errors = await validate(tenant);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('income');
  });
});
