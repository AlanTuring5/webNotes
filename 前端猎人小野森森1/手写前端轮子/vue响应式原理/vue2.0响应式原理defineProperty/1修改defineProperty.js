function defineProperty() {
    const _obj = {};
    Object.defineProperties(_obj, {
        a: {
            value: 1,
            writable: true,
            enumerable: true,
            configurable: true,
        },
        b: {
            value: 2
        }
    })
    return _obj;
}

const obj = defineProperty();

// writable: true,
obj.a = 5;
obj.b = 6;

// enumerable: true,
for (let i in obj) {
    console.log(i + ':' + obj[i])
}

// configurable: true,
delete obj.a;

console.log(obj)