import PriorityQueue from '../PriorityQueue';

const queue = new PriorityQueue();
console.log(queue.isEmpty()); // outputs true
queue.enqueue('zaking',2);
queue.enqueue('linbo',6);
queue.enqueue('queue',5);
queue.enqueue('ada',3);
queue.enqueue('John',1);
queue.enqueue('Jack',2);
queue.enqueue('Camila',3);
queue.enqueue('zak',3);
queue.print();