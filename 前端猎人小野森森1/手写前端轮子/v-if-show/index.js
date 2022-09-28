class Ifshow {
    constructor(options) {
        const { el, data, methods } = options;
        this.el = document.querySelector(el);
        this.data = data;
        this.methods = methods;
        this.statePool = new Map();
        this.eventPool = new Map();

        this.init();
        // console.log(this.data);
    }

    init() {
        this.initData();
        this.initDom(this.el);
        this.initView(this.statePool);
        this.initEvent(this.eventPool)
        // console.log(this.statePool)
    }
    // 1.代理数据与数据劫持
    initData() {
        for (let key in this.data) {
            Object.defineProperty(this, key, {
                get() {
                    console.log('访问：', this.data[key]);
                    return this.data[key];
                },
                set(newVal) {
                    console.log('设置：', key, newVal);
                    this.data[key] = newVal;
                    this.domChange(key, this.statePool);
                }
            })
        }
    }

    // 2.初始化DOM
    initDom(el) {
        const _childNodes = el.childNodes;

        if (!_childNodes.length) {
            return;
        }

        _childNodes.forEach(dom => {
            if (dom.nodeType === 1) {
                const vIf = dom.getAttribute('v-if');
                const vShow = dom.getAttribute('v-show');
                const vEvent = dom.getAttribute('@click');
                let _op = null;

                if (vIf) {
                    this.statePool.set(dom, {
                        type: 'if',
                        show: this.data[vIf],
                        data: vIf,
                    })
                } else if (vShow) {
                    this.statePool.set(dom, {
                        type: 'show',
                        show: this.data[vShow],
                        data: vShow,
                    })
                }

                if (vEvent) {
                    this.eventPool.set(dom, this.methods[vEvent]);
                }
            }

            this.initDom(dom);
        })
    }

    // 3.初始化视图
    initView(statePool) {
        this.domChange(null, statePool);
    }

    domChange(data, statePool) {
        console.log(data)
        if (!data) {
            for (let [k, v] of statePool) {
                switch (v.type) {
                    case 'if':
                        v.comment = document.createComment(`v-if`);
                        !v.show && k.parentNode.replaceChild(v.comment, k);
                        break;
                    case 'show':
                        !v.show && (k.style.display = 'none');
                        break;
                    default:
                        break;
                }
            }
            return;
        }

        // 5.改变数据的同时改变DOM
        for (let [k, v] of statePool) {
            if (v.data === data) {
                switch (v.type) {
                    case 'if':
                        v.show ? k.parentNode.replaceChild(v.comment, k) : v.comment.parentNode.replaceChild(k, v.comment);
                        v.show = !v.show;
                        break;
                    case 'show':
                        v.show ? k.style.display = 'none' : k.style.display = 'block';
                        v.show = !v.show;
                        break;
                    default:
                        break;
                }
            }
        }
    }

    // 4.eventPool 事件处理函数的绑定
    initEvent(eventPool) {
        for (let [k, v] of eventPool) {
            k.addEventListener('click', v.bind(this), false);
        }
    }

}

/**
 * statePool:[
 * [
 *      dom,
 *      {
 *      type:if/show
 *      show:true/false
 *      data:绑定的数据
 *      }
 * ]
 * ]
 * 
 * eventPool:[
 *  [
 *      dom,
 *      handler,
 *  ]
 * ]
 */