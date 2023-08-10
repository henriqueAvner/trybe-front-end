import { renderCoins } from './componentes';
import { fetchExchange } from './services/exchange';

import './style.css';
import './reset.style.css';

const fakeCoins = [
    {name:'USD', value:'80'},
    {name:'USD', value:'80'},
    {name:'USD', value:'80'},
    {name:'USD', value:'80'},
    {name:'USD', value:'80'},
    {name:'USD', value:'80'}
]
renderCoins(fakeCoins, 'BRL');


const buttonElement = document.querySelector('header form button');


buttonElement.addEventListener('click', () => {
    const inputElement = document.querySelector('header form input');
    const inputValue = inputElement.value;
    
    fetchExchange(inputValue)
    .then(exchange => {
        //converter {USD: 80}
        //para [{name: USD, value: 80}]
        const rates = exchange.rates;
        const base = exchange.base;
        const ratesArray = Object.entries(rates);
        const ratesArrayToObject = ratesArray.map(rateCoin => {
            const name = rateCoin[0];
            const value = rateCoin[1];
            return {
                name,
                value
            }
        })
        renderCoins(ratesArrayToObject, base )
    })
})