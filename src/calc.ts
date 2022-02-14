export class Calculator {
  
    constructor() {

    }
  
    calculate(firstNum: number, secondNum: number, operation: string){
        switch (operation) {
            case "+":
                return firstNum + secondNum
            case "-":
                return firstNum - secondNum
            case "/":
                return firstNum / secondNum
            case "*":
                return firstNum * secondNum
            default:
                throw "Third operator must be string type one of the(-, +, /, *)"    
        
        }
    }
}