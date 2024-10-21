import '@testing-library/jest-dom';

jest.mock('../src/stores/useProfileStore', () => ({
    __esModule: true,
    default: () => require('../__mocks__/profileStoreMock'),
  }));
  