class CheckCard{
    constructor(cardNumber){
        this.cardNumber = cardNumber;
        this.cardNumberLength = toString(cardNumber).length;
    }
    validLength(){
        if (this.cardNumberLength === 13 || this.cardNumberLength === 15 || this.cardNumberLength === 16) {
            return true;
        }else{
            return false;
        }
    }
}