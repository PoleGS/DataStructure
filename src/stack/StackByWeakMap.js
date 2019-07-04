
//通过闭包把声明的变量变成私有属性
let Stack = (function () {
    //声明栈的基本依赖
    const _items = new WeakMap();
    //声明计数器
    const _count = new WeakMap();

    class Stack {
        constructor() {
            _count.set(this, 0);
            _items.set(this, {});
        }

        push(element) {
            const items = _items.get(this);
            const count = _count.get(this);
            items[count] = element;
            _count.set(this, count + 1);
        }

        isEmpty() {
            return _count.get(this) === 0;
        }

        pop() {
            //如果为空，那么则无法出栈
            if (this.isEmpty()) {
                return undefined;
            }
            const items = _items.get(this);
            let count = _count.get(this);
            count--;
            //重新为_count赋值
            _count.set(this, count);
            //删除出栈的元素，并返回该元素
            const result = items[count];
            delete items[count];
            return result;
        }

        peek() {
            if (this.isEmpty()) {
                return undefined;
            }
            const items = _items.get(this);
            const count = _count.get(this);
            //返回栈顶元素
            return items[count - 1];
        }

        size() {
            return _count.get(this);
        }

        clear() {
            /* while (!this.isEmpty()) {
                this.pop();
              } */
            _count.set(this, 0);
            _items.set(this, {});
        }

        toString() {
            if (this.isEmpty()) {
                return '';
            }
            const items = _items.get(this);
            const count = _count.get(this);
            let objString = `${items[0]}`;
            for (let i = 1; i < count; i++) {
                objString = `${objString},${items[i]}`;
            }
            return objString;
        }

        print() {
            console.log(this.toString());
        }
    }

    return Stack;
})();

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.print(); // 1, 3