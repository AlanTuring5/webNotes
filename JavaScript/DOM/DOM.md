# 获取元素

返回的是一个集合

## getElement

```js
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.getElementsByName();
```

## querySelector

可以使用任何 CSS 选择器

```JS
document.querySelector() //只会查找一个,因此它在速度上更快，并且写起来更短
document.querySelectorAll() //会查找所有元素
```

例子

```js
const el = document.querySelector('*')
const el = document.querySelector('#app')
```



## 获取子节点

```JS
const el = document.querySelector('#app')
const _chilNodes = el.childNodes;
```



## 获取父节点

```JS
const el = document.querySelector('div')
const _chilNodes = el.parentNode;
```



# 生成元素

## createElement

```JS
const el = document.createElement('div');
```



# 生成注释

## createComment

```JS
comment = document.createComment(`v-if`);
```



# 生成文本内容

## createTextNode

```js
document.createTextNode(c);
```



# 替换子节点

## replaceChild

```JS
//创建注释标签
v.comment = document.createComment(`v-if`);
//找到子节点k的父节点，将子节点替换成标签
k.parentNode.replaceChild(v.comment, k);
```



# 添加子节点

## appendChild

```JS
el.appendChild(c);
```





# 属性

## nodeType

- 对于元素节点 `elem.nodeType == 1`，
- 对于文本节点 `elem.nodeType == 3`，
- 对于 document 对象 `elem.nodeType == 9`，
- 在 [规范](https://dom.spec.whatwg.org/#node) 中还有一些其他值。



## Attribute

- `elem.hasAttribute(name)` —— 检查特性是否存在。
- `elem.getAttribute(name)` —— 获取这个特性值。
- `elem.setAttribute(name, value)` —— 设置这个特性值。
- `elem.removeAttribute(name)` —— 移除这个特性。



### getAttribute

```js
<div class="box box1" v-if="boxShow1">box1</div>
const vIf = dom.getAttribute('v-if'); //vIF = boxShow1
```





# 标签

## nodeName 和 tagName



# 内容

## innerHTML

允许将元素中的 HTML 获取为字符串形式，是更改页面最有效的方法之一

## innerHTML+=

将标签整个替换



# 添加事件

## addEventListener

> 第一个参数event：指事件的类型（如’click’,‘mousedown’）
> 第二个参数function：事件触发后调用的函数
> 第三个参数useCapture：设置传递的类型，默认值为false，即冒泡传递（可省略）；值为true时，捕获传递。
>
> 在冒泡中，内部元素的事件会先被触发，然后再触发外部元素； 【从里到外】
> 在捕获中，外部元素的事件会被先触发，然后才会触发内部元素的事件。【从外到里】

```JS
el.addEventListener('click', event.bind(this), false);
```



# 样式

## style

```JS
//隐藏节点，样式中增加 display:none
el.style.display = 'none'
```

