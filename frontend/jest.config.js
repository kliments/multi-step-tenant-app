module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  setupFiles: ["<rootDir>/__mocks__/profileStoreMock.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
