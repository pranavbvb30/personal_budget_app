module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@mui/x-date-pickers(.*)$": "<rootDir>/node_modules/@mui/x-date-pickers$1",
    "^@mui/x-charts(.*)$": "<rootDir>/node_modules/@mui/x-charts$1",
  },
  testMatch: ["**/*.test.js", "**/*.test.jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
