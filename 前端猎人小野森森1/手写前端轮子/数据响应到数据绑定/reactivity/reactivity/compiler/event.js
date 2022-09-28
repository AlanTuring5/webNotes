import { checkType, randomNum } from "../shared/utils";

const reg_onClick = /onClick\s\=\s\"(.*?)\"/g;
const reg_methord = /^(.*?)\(/;
const reg_arg = /\((.*?)\)/;

/**
 * eventPool = []
 * {
 * flag: 随机数
 * handler: 事件字符串（add、minus）
 * type: click
 * }
 */

const eventPool = [];

function eventFormat(template) {
    return template.replace(reg_onClick, function (node, key) {
        // console.log(node, key)
        const _flag = randomNum();
        eventPool.push({
            flag: _flag,
            handler: key.trim(),
            type: 'click',
        })
        return `data-dom="${_flag}"`;
    })
}

function bindEvent(methods) {
    const allElements = document.getElementsByTagName('*');
    let oItem = null;
    let _flag = 0;

    eventPool.forEach((event) => {
        for (let i = 0; i < allElements.length; i++) {
            oItem = allElements[i];
            _flag = parseInt(oItem.dataset.dom);

            if (event.flag === _flag) {
                oItem.addEventListener(event.type, function () {
                    const method = event.handler.match(reg_methord)[1];
                    const arg = checkType(event.handler.match(reg_arg)[1]);

                    methods[method](arg);
                }, false)
            }
        }
    })
}

export {
    eventFormat,
    bindEvent,
}