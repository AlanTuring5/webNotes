// defineProperty：数据劫持 → 给对象进行扩展 → 属性进行设置

// Proxy ES6 构造函数

const target = {
    a: 1,
    b: 2,
}

const proxy = new Proxy(target, {
    get(target, prop) {
        return '"this target\'s value is"' + target[prop];
    },
    set(target, prop, value) {
        target[prop] = value;
        console.log(target[prop]);
    }
});

console.log(proxy.a);
console.log(target.a);
proxy.b = 3;