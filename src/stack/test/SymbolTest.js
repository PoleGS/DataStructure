import StackBySymbol from '../StackBySymbol';

const stack = new StackBySymbol();

const properties = Object.getOwnPropertyNames(stack);

stack.push('element1');
stack.push('element2');

console.log(properties);

stack.print();

const objectSymbol = Object.getOwnPropertySymbols(stack);

console.log(objectSymbol);

stack[objectSymbol[0]].push('element3');

console.log(stack);

//_dataSource在构造函数外, 可以修改, 不是很完善