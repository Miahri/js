//Patterns
//publisher/subscriber

store.subscribe(function subscriber() {}) //изменение стора
button.addEventListener('click', function subscriber() {}) //произошел клик
promises.then(function subscriber() {}) //промис зарезолвился
setTimeout(function subscriber() {}, 1000) //прошла секунда

//subscriber == listener == handler == observer

const store = {
    _subscribers: [],
    subscribe(subscriber) {
        this._subscribers.push(subscriber)
    },
    dispatch(action) {
        this._subscribers.forEach(subscriber => subscriber())
    }
};

const button = {
    _subscribers: {
        'click': [],
        'focus': []
    },
    addEventListener(event, subscriber) {
        this._subscribers.forEach(subscriber => subscriber())
    },
    click() {
        this._subscribers['click'].forEach(subscriber => subscriber())
    },
    focus() {
        this._subscribers['focus'].forEach(subscriber => subscriber())
    },
    removeEventListener(event, subscriber) {
        this._subscribers[event] = this._subscribers[event].filter(currentSubscriber => currentSubscriber !== subscriber)
    }
}