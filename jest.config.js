module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./src/setupTests.js'],
  globals: {
    Uint8Array,
  },
  transform: {
    '^.+.[tj]sx?$': [
      'babel-jest',
    ],
  },
};
