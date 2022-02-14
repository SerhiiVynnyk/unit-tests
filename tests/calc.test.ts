import { Calculator } from "../src/calc";
describe("test Calculator class", () => {
    let calc = new Calculator;
 it("should return 9 for add(4,5)", () => {
    expect(calc.calculate(4,5,"+")).toBe(9);
  }); 
  it("should return -1 for difference(4,5)", () => {
    expect(calc.calculate(4,5,"-")).toBe(-1);
  });
  it("should return 0.8 for division(4,5)", () => {
    expect(calc.calculate(4,5,"/")).toBe(0.8);
  });
  it("should return 20 for multiple(4,5)", () => {
    expect(calc.calculate(4,5,"*")).toBe(20);
  });
});