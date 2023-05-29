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