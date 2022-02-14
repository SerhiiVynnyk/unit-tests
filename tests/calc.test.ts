import { Calculator } from "../src/calc";
describe("test Calculator class", () => {
    let calc1 = new Calculator(4,5,"+");
    let calc2 = new Calculator(4,5,"-");
    let calc3 = new Calculator(4,5,"/");
    let calc4 = new Calculator(4,5,"*");
 it("should return 9 for add(4,5)", () => {
    expect(calc1.calculate()).toBe(9);
  }); 
  it("should return 9 for difference(4,5)", () => {
    expect(calc2.calculate()).toBe(-1);
  });
  it("should return 9 for division(4,5)", () => {
    expect(calc3.calculate()).toBe(0.8);
  });
  it("should return 9 for multiple(4,5)", () => {
    expect(calc4.calculate()).toBe(20);
  });
});