const reg_check_str = /^['|"].+?['|"]$/;
const reg_str = /['|"]/g;

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

function hasOwnProperty(target, key) {
    return Object.prototype.hasOwnProperty.call(target, key)
}

function isEqual(newVal, oldVal) {
    return newVal === oldVal;
}

function randomNum() {
    return new Date().getTime() + parseInt(Math.random() * 10000);
}

function checkType(str) {
    // 如果是String
    if (reg_check_str.test(str)) {
        return str.replace(reg_str, '')
    }

    // 如果是Boolean
    switch (str) {
        case 'true':
            return true
        case 'false':
            return false
        default:
            break
    }

    // 如果是Number
    return Number(str);
}

export {
    isObject,
    hasOwnProperty,
    isEqual,
    randomNum,
    checkType,
}