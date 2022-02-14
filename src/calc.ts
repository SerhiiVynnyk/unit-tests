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
                return "Third operator must be string type one of the(-, +, /, *)"    
        
        }
    }
}