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
            return false;
        }
    }
}

export default CheckCard;