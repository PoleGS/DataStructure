/**
 使用栈解决进制转换的问题
 */
import Stack from '../StackByWeakMap';


//十进制转二进制
const decimalToBinary = (decNumber) => {
    const remStack = new Stack();
    let number = decNumber, rem, binaryString = '';
    while (number > 0){
        rem = number % 2;
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
};

console.log(decimalToBinary(11));

//实现任意进制的转换
const baeeConvert = (decNumber, base) => {
    const remStack = new Stack();
    //转换字典
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber, rem, baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return baseString;
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number/base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
};

console.log(baeeConvert(452, 16));