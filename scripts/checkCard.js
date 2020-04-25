class CheckCard{
    constructor(cardNumber){
        this.cardNumber = cardNumber;
        this.cardNumberLength = cardNumber.toString().length;
        this.firstNumber = parseInt(cardNumber.toString().slice(0, 1));
        this.firstTwoNumbers = parseInt(cardNumber.toString().slice(0, 2));
    }
    validLength(){
        if (this.cardNumberLength === 13 || this.cardNumberLength === 15 || this.cardNumberLength === 16) {
            return true;
        }else{
            return false;
        }
    }
    whichCard(){
        if (this.firstNumber === 4) {
            return "Visa"
        } else if (this.firstTwoNumbers >= 51 && this.firstTwoNumbers <= 55) {
            return "Mastercard"
        } else if (this.firstTwoNumbers === 34 || this.firstTwoNumbers === 37) {
            return "American Express"
        }else{
            return "Nieprawidłowy";
        }
    }
    validLuhn(){
        const cardNumberString = this.cardNumber.toString();
        let firstStepValidValue = 0;

        for (let i = cardNumberString.length - 2; i >= 0; i=i-2) {
            const number = parseInt(cardNumberString[i])
            if((number * 2) >=10){
                //the biggest digit is 19 => 1 and 9
                const [firstDigit, secondDigit] = (number * 2).toString();
                firstStepValidValue += parseInt(firstDigit);
                firstStepValidValue += parseInt(secondDigit);
            }else{
                firstStepValidValue += (number*2);
            }
        }

        let secondStepValidValue = 0;

        for (let i = cardNumberString.length - 1; i >= 0; i = i - 2) {
            const number = parseInt(cardNumberString[i])
            secondStepValidValue += number; 
        }
        const finalValue = firstStepValidValue + secondStepValidValue;
        
        if(finalValue % 10 === 0){
            return true;
        }else{
            return false;
        }
    }
}

export default CheckCard;