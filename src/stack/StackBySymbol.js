const _dataSource = Symbol('stackDataSource');

class StackBySymbol {
    constructor() {
        this[_dataSource] = [];
    }

    push(element) {
        this[_dataSource].push(element);
    }

    pop() {
        return this[_dataSource].pop();
    }

    //返回栈顶元素
    peek() {
        return this[_dataSource][this[_dataSource].length - 1];
    }

    isEmpty() {
        return this[_dataSource].length === 0;
    }

    size() {
        return this[_dataSource].length;
    }

    clear() {
        this[_dataSource] = [];
    }

    toString() {
        return this[_dataSource].toString();
    }

    print() {
        console.log(this.toString());
    }
}

export default StackBySymbol;