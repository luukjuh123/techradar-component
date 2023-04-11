module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!d3|d3-array|d3-scale|internmap|delaunator|robust-predicates)",
  ],
  moduleNameMapper: {
    'd3-scale': '<rootDir>/node_modules/d3-scale/dist/d3-scale.min.js',
    '^d3$': '<rootDir>/node_modules/d3/dist/d3.min.js',
},
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
