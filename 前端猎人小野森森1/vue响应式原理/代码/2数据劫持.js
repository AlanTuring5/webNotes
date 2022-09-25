function defineProperty() {
    const _obj = {};
    let a = 1;

    // 每个属性被定义的时候，都会有getter和setter方法
    Object.defineProperties(_obj, {
        a: {
            get() {
                return '"a"\'s value is ' + a + '.';
            },
            set(newVal) {
                a = newVal;
                let oP = document.getElementsByTagName('p')[0];
                oP.innerHTML = a;
            }
        },
        b: {

        }
    })
    return _obj;
}

const obj = defineProperty();
console.log(obj.a)
obj.a = 1;


// 数据劫持


// Uncaught TypeError TypeError: Cannot set properties of undefined (setting 'innerHTML')
// 由于页面加载顺序为:结构>样式>行为(html>css>JavaScript)。如果js部分写到了页面内容的前面，那么在加载的时候，浏览器的加载顺序（错误顺序）是js > html，所以就有可能报标题中的错误。