//запусткаются последовательно, но результаты возвращаются паралелльно

fetch('https://google.com/query=promise')
    .then(() => {
        console.log('response from google');
        fetch('https://yahoo.com/query=promise')
    })
    .then(() => {
        console.log('response from yahoo');
        fetch('https://duckduckgo.com/query=promise')
    })
    .then(() => {
        console.log('response from duckduckgo')
    })
    .catch((err) => {
        console.log(err);
    })

//каждый последющий then ожидает результата выполнения предыдущего
fetch('https://google.com/query=promise')
    .then((data) => {
        console.log('response from google', data)
        return fetch('https://yahoo.com/query=promise')
    })
    .then((data) => {
        console.log('response from yahoo', data)
        return fetch('https://duckduckgo.com/query=promise')
    })
    .then((data) => {
        console.log('response from duckduckgo', data)
    })
    .catch((err) => {
        console.log(err);
    })

//статический метод all завершится ошибкой, если хоть один из промисов завершиться ошибкой
//спользуется, когда нужно дождаться выполнения всех промисов
const promise1 = fetch('https://google.com/query=promise');
const promise2 = fetch('https://yahoo.com/query=promise');
const promise3 = fetch('https://duckduckgo.com/query=promise');

const bigPromise = Promise.all([promise1, promise2, promise3]);
bigPromise
    .then((resultsArray) => {
        const googleResults = resultsArray[0];
        const yahooResults = resultsArray[1];
        const duckuckgoResults = resultsArray[2];
    })
    .catch((err) => {
        console.log(err);
    })
