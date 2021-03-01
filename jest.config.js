// module.exports = {
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };
module.exports = {
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};
