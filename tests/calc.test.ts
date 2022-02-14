import { Calculator } from "../src/calc";
describe("test Calculator class", () => {
    let calc1 = new Calculator(4,5,"+");
  it("should return 9 for add(4,5)", () => {
    expect(calc1.calculate()).toBe(9);
  });
});