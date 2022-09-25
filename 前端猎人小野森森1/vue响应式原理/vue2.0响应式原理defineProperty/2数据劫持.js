function defineProperty() {
    const _obj = {};
    let a = 1;

    // 每个属性被定义的时候，都会有get和set方法
    Object.defineProperties(_obj, {
        a: {
            // value:1
            // writable:true
            // value 和 writable 与 get 和 set 互斥
            get() {
                return '"a"\'s value is ' + a + '.';
            },
            set(newVal) {
                a = newVal;
                let oP = document.getElementsByTagName('p')[0];
                oP.innerHTML = a;
            }
        },
    })
    return _obj;
}

const obj = defineProperty();
console.log(obj.a)
obj.a = 1;


// 数据劫持


// Uncaught TypeError TypeError: Cannot set properties of undefined (setting 'innerHTML')
// 由于页面加载顺序为:结构>样式>行为(html>css>JavaScript)。如果js部分写到了页面内容的前面，那么在加载的时候，浏览器的加载顺序（错误顺序）是js > html，所以就有可能报标题中的错误。