const profileMock = require("../src/mocks/data/profileStore.json");

jest.mock("zustand/middleware", () => ({
  persist: (config) => (set, get, api) => config(set, get, api),
  createJSONStorage: jest.fn(() => ({})),
}));

module.exports = {
  profile: { ...profileMock },
  updateProfile: jest.fn(function (newData) {
    module.exports.profile = { ...module.exports.profile, ...newData };
  }),
  submitProfile: jest.fn(() => Promise.resolve()),
};
