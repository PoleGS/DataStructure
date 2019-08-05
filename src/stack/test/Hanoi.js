import Stack from '../StackByWeakMap';

/**
 * @desc 展示每一个塔上的圆盘情形
 * @param plates 圆盘的数量
 * @param source 源塔
 * @param helper 辅助塔
 * @param dest 目标塔
 * @param sourceName 自定义源塔名称
 * @param helperName 自定义辅助塔名称
 * @param destName 自定义目标塔名称
 * @param moves 默认为数组 用于展示每一步的具体情形
 * @return {Array}
 */
function towerOfHanoi(plates, source, helper, dest, sourceName, helperName, destName, moves = []) {
    if (plates <= 0) {
        return moves;
    }
    if (plates === 1) {
        dest.push(source.pop());
        const move = {};
        move[sourceName] = source.toString();
        move[helperName] = helper.toString();
        move[destName] = dest.toString();
        moves.push(move);
    } else {
        //递归调用自身 此时将前n-1个圆盘放置辅助塔上
        towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, moves);
        //从源柱子拿出最顶层的一个放入目标柱子
        dest.push(source.pop());
        const move = {};
        move[sourceName] = source.toString();
        move[helperName] = helper.toString();
        move[destName] = dest.toString();
        moves.push(move);
        //将在辅助塔上的n-1个圆盘放到目标塔
        towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, moves);
    }
    return moves;
}

function hanoiStack(plates) {
    const source = new Stack();
    const dest = new Stack();
    const helper = new Stack();
    for (let i = plates; i > 0; i--) {
        source.push(i);
    }
    //通过return调用towerOfHanoi计算方法。
    return towerOfHanoi(plates, source, helper, dest, '源', '辅助', '目标');
}
//计算在汉诺塔的层数为plates的时候，每一个是从哪个柱子拿到哪个柱子的
function hanoi(plates, source, helper, dest, moves = []) {
    if (plates <= 0) return moves;
    if (plates === 1) {
        moves.push([source, dest]);
    } else {
        hanoi(plates - 1, source, dest, helper, moves);
        moves.push([source, dest]);
        hanoi(plates - 1, helper, source, dest, moves);
    }
    return moves;
}


console.log(hanoiStack(4));
console.log('*********************************************************************');
console.log(hanoi(4, '源', '辅助', '目标'));