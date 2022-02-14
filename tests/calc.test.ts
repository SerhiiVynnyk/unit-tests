import { Calculator } from "../src/calc";
describe("test Calculator class", () => {
    let calc1 = new Calculator(4,5);
  it("should return 9 for add(4,5)", () => {
    expect(calc1.calculate().sum1).toBe(9);
  });
  it("should return 20 for multiple(4,5)", () => {
    expect(calc1.calculate().multiple).toBe(20);
  });
  it("should return -1 for diff(4,5)", () => {
    expect(calc1.calculate().difference).toBe(-1);
  });
  it("should return 0.8 for division(4,5)", () => {
    expect(calc1.calculate().divission).toBe(0.8);
  });
});