//1st variant - it's not ok
fetch('https://libruary/authors', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        fetch('https://libruary/authors/5', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                fetch('https://libruary/authors/5/books', (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        fetch('https://libruary/authors/5/books/6', (err, data) => {
                            if (err) {
                                console.log(err);
                            } else {

                            }
                        })
                    }
                })
            }
        })
    }
});

//2nd variant
fetch('https://libruary/authors')
    .then((data) => {
        fetch('https://libruary/authors/5')
    })
    .then((data) => {
        fetch('https://libruary/authors/5/books')
    })
    .then((data) => {
        fetch('https://libruary/authors/5/books/6')
    })

//promise has 3 values of status: pending, fulfilled, rejected

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            fetch('https//:google.com', (data) => {
                if (data) {
                    resolve(data)
                } else {
                    reject('some error')
                }
            })
        })
        return promise;
    }
}

const promiseRes = server.getData();

promiseRes.then(data => {
    console.log('then', data)
});

promiseRes.catch(err => {
    console.error(err);
})

//use it when it doesn't matter what we get. for example, to off loader
promiseRes.finally(data => {
    console.log('we get something')
})

const serverData = {
    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(data => {
                resolve(data)
            }, 2000)
        })
    }
}

serverData
    .getData()
    .then(data => {
        console.log('then', data);
        return data
    })
    .then(resFromData => {
        console.log('then2', resFromData);
    })
    .catch(err => {
        console.log('catch', err); //returned true value, so next 'then' will process
        //console.log(a); //returned undefined value, so processing will jump to "catch"
    })
    .then(resFromData => {
        console.log('then3', resFromData);
    })
    .catch(err => {
        console.log('catch2', err);
    })