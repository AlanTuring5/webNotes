import domDiff from "./domDif";
import { createElement, render, renderDom } from "./virtualDom"

// 虚拟节点
const vDom = createElement('ul', { class: 'list', style: 'width:300px;height:300px;background-color:orange' }, [
    createElement('li', { class: 'item', 'data-index': 0, }, [
        createElement('p', { class: 'text' }, ['第1个列表项'])
    ]),
    createElement('li', { class: 'item', 'data-index': 1, }, [
        createElement('p', { class: 'title' }, ['第2个列表项'])
    ]),
    createElement('li', { class: 'item', 'data-index': 2 }, ['第3个列表项'])
])

const vDom1 = createElement('ul', { class: 'list-wrap', style: 'width:300px;height:300px;background-color:orange' }, [
    createElement('li', { class: 'item', 'data-index': 0, }, [
        createElement('p', { class: 'title' }, ['特殊列表项'])
    ]),
    createElement('li', { class: 'item', 'data-index': 1, }, [
        createElement('p', { class: 'title' }, [
            createElement('span', { class: 'title' }, ['新的列表项'])
        ])
    ]),
    createElement('div', { class: 'item', 'data-index': 2 }, ['第3个列表项'])
])

// 转为真实节点
const rDom = render(vDom);

// 挂载到app上
renderDom(rDom, document.getElementById('app'))

// 差异分析，创建补丁包
const patches = domDiff(vDom, vDom1);

