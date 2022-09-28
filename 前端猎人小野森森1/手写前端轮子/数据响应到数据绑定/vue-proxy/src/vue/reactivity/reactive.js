import { isObject } from '../shared/utils';
import { mutableHandler } from './mutableHandler'

function reactive(target) {
    return createReactiveObject(target, mutableHandler)
}

function createReactiveObject(target, baseHandler) {
    if (!isObject(target)) {
        console.log('typeError')
        return target
    }
    const observer = new Proxy(target, baseHandler);
    return observer;
}

export {
    reactive
}