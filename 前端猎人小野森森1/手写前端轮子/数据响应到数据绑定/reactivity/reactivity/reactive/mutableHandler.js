import { hasOwnProperty, isEqual, isObject } from "../shared/utils";
import { reactive } from ".";
import { update } from "../compiler";

const get = createGetter(),
    set = createSetter();

function createGetter() {
    return function get(target, key, reciever) {
        const res = Reflect.get(target, key, reciever);
        if (isObject(res)) {
            return reactive(res);
        }
        console.log('响应式获取: ' + key + ' : ' + target[key])
        return res;
    }
}

function createSetter() {
    return function set(target, key, value, reciever) {
        const isKeyExist = hasOwnProperty(target, key),
            oldValue = target[key],
            res = Reflect.set(target, key, value, reciever);

        if (!isKeyExist) {
            console.log('响应式新增: ' + key + ' : ' + value)
        } else if (!isEqual(value, oldValue)) {
            console.log('响应式修改: ' + key + ' : ' + value)
            update(key, value);
        }

        return res;
    }
}


const mutableHandler = {
    get,
    set,
}

export {
    mutableHandler,
}