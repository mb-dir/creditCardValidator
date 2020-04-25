import validCard from './CheckCard.js'
const formDataCard = document.querySelector('#cardData');

formDataCard.addEventListener('submit', (e)=>{
    e.preventDefault();

    const cardNumber = parseInt(document.querySelector("#cardNumber").value);
    const informationPlace = document.querySelector('#result');

    const validator = new validCard(cardNumber);
    const resultValidation = validator.checkCardNumber();
});