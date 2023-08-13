export function fetchExchange (inputValue) {
    return fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
    .then(res => res.json())
    .then(data => data)
}