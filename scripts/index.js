import validCard from './CheckCard.js'
const formDataCard = document.querySelector('#cardData');

formDataCard.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Variables realated with DOM
    const cardNumber = parseInt(document.querySelector("#cardNumber").value);
    const informationPlace = document.querySelector('#result');

    //validCard handling
    const validator = new validCard(cardNumber);
    const resultValidation = validator.checkCardNumber();

    informationPlace.innerHTML = resultValidation;
});