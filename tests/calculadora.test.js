const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retonar 4", () => {
  const result = calculadora.somar(2, 2);
  expect(result).toBe(4);
});
