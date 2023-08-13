
const ulElement = document.querySelector('.container main ul'); // assim como no CSS, posso pegar uma ul a partir do caminho de tag's dela;
const h2Element = document.querySelector('.container main h2');

function createLiElement (name, value) {
    const liElement = document.createElement('li');// criei um elemento li para adicionar dentro da ul;
    liElement.innerHTML = `<b>${name}</b><span>${value}</span>` // dentro da li, adiciono o b e o span;
    //retorna o li com o <b> e <span> preenchidos
    return liElement;
    // <li>
    //     <b>USD</b>
    //     <span>80</span>
    // </li>
}
//A criação dessa função foi para basicamente, criar um elemento li dentro da ul para todas as informações, e dentro de cada li, colocar o nome da moeda e o valor da moeda;


//Os parâmetros dessa função, são para retornar o objeto, e o nome da moeda:
//coins = [{name: 'USD', value: '80'}];
//baseCoin - 'BRL'
export function renderCoins(coins, baseCoin) {
    ulElement.innerHTML = ''; // aqui estou limpando a ul antes de utilizá-la.
    h2Element.innerHTML = `Valores referentes a 1 ${baseCoin}`; // aqui eu adiciono o nome da moeda, que passei como parametro ao título dentro da tabela;
    coins.forEach(coin => {//para cada moeda escrita;
        const name = coin.name;// eu vou pegar o nome dessa moeda;
        const value = coin.value; // pegar o valor dessa moeda;

        const liElement = createLiElement(name,value); // criar uma variavel com a função acima de criar o elemento li;
        ulElement.appendChild(liElement)//dentro da ul, eu vou acrescentar essa variavel com a função de criar a li;

    });
}
//Essa função irá reaproveitar o createliElement, ela ira mostrar na tela a informação das moedas; 