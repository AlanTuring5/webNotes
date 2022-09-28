function isObject(value) {
    return typeof value === 'object' && value !== null;
}

function hasOwnProperty(target, key) {
    return Object.prototype.hasOwnProperty.call(target, key)
}

function isEqual(newVal, oldVal) {
    return newVal === oldVal;
}

export {
    isObject,
    hasOwnProperty,
    isEqual,
}