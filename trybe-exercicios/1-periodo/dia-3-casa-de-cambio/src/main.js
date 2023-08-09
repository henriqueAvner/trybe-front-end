//  const button = document.querySelector('#button');
//  const cCoins = document.querySelector('#moedas');
// // const placeCoin = document.querySelector('#coin');

const moeda = 'USD';
const API_COINS = fetch(`https://api.exchangerate.host/latest?base=${moeda}`);


const objectCoins = API_COINS
.then((res) => res.json())
.then((data) => data.rates)
.catch((err) => err.message);



// button.addEventListener('click',() => {
//     const result = document.createElement('p');
//     result.innerHTML = getCoin();
//     cCoins.appendChild(result);
// })


const getCoin = () => {
   objectCoins.then((data) => {
    const obj = data.rates;
        
    })  
}

console.log(getCoin());