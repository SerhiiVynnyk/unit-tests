export class Calculator {
    firstNum: number;
    secondNum: number;
  
  
    
  
    constructor(firstNum: number, secondNum: number) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    }
  
    calculate(){
      return {
          sum1: this.firstNum + this.secondNum,
          difference: this.firstNum - this.secondNum,
          multiple: this.firstNum * this.secondNum,
          divission: this.firstNum/this.secondNum,
        }
      }
  }
  
  
