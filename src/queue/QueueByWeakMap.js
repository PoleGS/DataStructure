let Queue = (function () {
    const items = new WeakMap();

    class QueueByWeakMap {
        constructor() {
            items.set(this, []);
        }

        enqueue = (element) => {
            let cur = items.get(this);
            cur.push(element);
        };

        dequeue = () => {
          let cur = items.get(this);
          return cur.shift();
        };

        front() {
            return items.get(this)[0];
        }

        isEmpty() {
            return items.get(this).length === 0;
        }

        size() {
            return items.get(this).length;
        }
    }
})();

export default Queue;