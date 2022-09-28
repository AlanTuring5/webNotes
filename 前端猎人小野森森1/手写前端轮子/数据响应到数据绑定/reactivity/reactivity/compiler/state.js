import { randomNum } from "../shared/utils";

const reg_reactive = /\{\{(.*?)\}\}/g;
const reg_node = /\<.+?\>\{\{(.+?)\}\}\<\/.+?\>/g;
const reg_tag = /\<(.+?)\>/;

const statePool = [];

function stateFormat(template, state) {
    console.log(template, state)
    const _state = {}

    template = template.replace(reg_node, (node, key) => {
        console.log(node, key);
        const tag = node.match(reg_tag)[1];
        console.log(tag);
        const _flag = randomNum();
        _state.flag = _flag;
        console.log(`<${tag} data-dom-"${_flag}">{{${key}}}</${tag}>`)
        return `<${tag} data-dom="${_flag}">{{${key}}}</${tag}>`
    })

    template = template.replace(reg_reactive, (node, key) => {
        console.log(node, key)
        let _reactive = key.trim();
        const _reactiveArray = _reactive.split('.');
        console.log(_reactiveArray)

        let i = 0;
        while (i < _reactiveArray.length) {
            _reactive = state[_reactiveArray[i]];
            i++;
        }

        _state.state = _reactiveArray;
        statePool.push(_state);

        // console.log(statePool)
        return _reactive;
    })

    return template;
}


function update(key, value) {
    const allElements = document.getElementsByTagName('*');
    let oItem = null;
    statePool.forEach((item) => {
        if (item.state[item.state.length - 1] === key) {
            for (let i = 0; i < allElements.length; i++) {
                oItem = allElements[i];
                const _flag = parseInt(oItem.dataset.dom);
                if (item.flag === _flag) {
                    oItem.innerHTML = value;
                }
            }
        }
    })
    console.log(statePool);
}

export {
    stateFormat,
    update,
}