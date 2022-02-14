"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(firstNum, secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    }
    calculate() {
        return {
            sum1: this.firstNum + this.secondNum,
            difference: this.firstNum - this.secondNum,
            multiple: this.firstNum * this.secondNum,
            divission: this.firstNum / this.secondNum,
        };
    }
}
exports.Calculator = Calculator;
