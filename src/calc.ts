export class Calculator {
    firstNum: number;
    secondNum: number;
    operation: string;
  
  
    
  
    constructor(firstNum: number, secondNum: number, operation: string) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.operation = operation;
    }
  
    calculate(){
      if(this.operation === "+") return this.firstNum + this.secondNum
      else if(this.operation === "-") return this.firstNum - this.secondNum
      else if(this.operation === "/") return this.firstNum / this.secondNum
      else if(this.operation === "*") return this.firstNum * this.secondNum
      else return "Third operator must be string type one of(-, +, /, *)"
      }
  }
  
  
