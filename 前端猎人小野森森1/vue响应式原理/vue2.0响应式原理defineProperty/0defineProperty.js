// function defineProperty() {
//     const _obj = {};
//     Object.defineProperty(_obj, 'a', {
//         value: 1

//     })
//     return _obj;
// }

function defineProperty() {
    const _obj = {};
    Object.defineProperties(_obj, {
        a: {
            value: 1
        },
        b: {
            value: 2
        }
    })
    return _obj;
}

const obj = defineProperty();

// 属性值不可修改
obj.a = 5;

// 属性不可枚举
for (let i in obj) {
    console.log(i + ':' + obj[i])
}

// 属性不可删除
delete obj.a;

console.log(obj)