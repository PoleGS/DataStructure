class QueueByArray {
    //存放队列元素的数组
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    };

    dequeue() {
         return this.items.shift();
    };

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    };

    size() {
        return this.items.length;
    }
}

export default QueueByArray;