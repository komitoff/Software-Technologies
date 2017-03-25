function Calculator (leftOperand, rightOperand, operator) {
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
    this.operator = operator;

    this.calculatorResult() = function() {
        let result = 0;

        switch (this.operator) {
            case '+':
                result = this.leftOperand + this.rightOperand;
                break;
            case '-':
                result = this.leftOperand - this.rightOperand;
                break;
            case '*':
                result = this.leftOperand * this.rightOperand;
                break;
            case '/':
                result = this.leftOperand / this.rightOperand;
                break;
        }

        return result;
    }
}