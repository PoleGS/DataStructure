
let PriorityQueue = (function () {
    const items = new WeakMap();

    class PriorityQueue {
        constructor() {
            items.set(this, []);
        }

        //创建一个有优先级的元素类
        QueueElement = (element, priority) => {
            let queueElement = {
                element, priority
            }
            return queueElement;
        };

        //优先级按照升序排列, 1最大 以此类推
        enqueue = (element, priority) => {
            let queueElement = this.QueueElement(element, priority);
            let queue = items.get(this), added = false;
            for (let index = 0; index < queue.length; index++) {
                if (queue[index].priority > queueElement.priority) {
                    queue.splice(index, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                queue.push(queueElement);
            }
        };

        dequeue = () => {
            let queue = items.get(this);
            return queue.shift();
        };

        front = () => {
            let queue = items.get(this);
            return queue[0];
        };

        isEmpty = () => {
            let queue = items.get(this);
            return queue.length === 0;
        };

        size = () => {
            let queue = items.get(this);
            return queue.length;
        };

        print = () => {
            let queue = items.get(this);
            for (let cur of queue) {
                console.log(`${cur.element} - ${cur.priority}`);
            }
        };

    }

    return PriorityQueue;
})();

export default PriorityQueue;