import { ATTR, TEXT, REMOVE, REPLACE } from './pathTypes'

let patches = {}

function domDiff(oldVDom, newVDom) {
    let index = 0;
    vNodeWalk(oldVDom, newVDom, index);
    return patches;
}

function vNodeWalk(oldNode, newNode, idnex) {
    let vnPatch = [];

    // 如果新节点不存在，说明删除了
    if (!newNode) {
        vnPatch.push({
            type: REMOVE,
            idnex
        })
    }
    // 如果为文本节点，判断是否更改了
    else if (typeof oldNode === 'string' && typeof newNode == 'string') {
        if (oldNode !== newNode) {
            vnPatch.push({
                type: TEXT,
                text: newNode,
            })
        }
    }
    // 如果标签相同，判断属性是否增删了
    else if (oldNode.type === newNode.type) {
        const attrPatches = attrsWalk(oldNode.props, newNode.props);

        if (Object.keys(attrPatches).length) {
            vnPatch.push({
                type: ATTR,
                attrs: attrPatches,
            })
        }

        childrenWalk(oldNode.children, newNode.children, ++index);
    }
}

function attrsWalk(oldProps, newProps) {
    const attrPatches = {};

    // 判断删除了哪些属性
    for (let key in oldProps) {
        if (oldProps[key] !== newProps[key]) {
            attrPatches[key] = newProps[key];
        }
    }

    // 判断新增了哪些属性
    for (let key in newProps) {
        if (!oldProps.hasOwnProperty(key)) {
            attrPatches[key] = newProps[key];
        }
    }

    return attrPatches;
}

export default domDiff;