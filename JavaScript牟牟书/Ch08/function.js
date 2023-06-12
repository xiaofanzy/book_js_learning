/**
 * 函数声明
 */

function printprops(obj) {
    for (let p in obj) {
        console.log(`${p}: ${obj[p]}`);
    }
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

// 将函数表达式赋值给常量，这样防止意外又给他赋予新值而重写函数
const square = function (x) {
    return x * x;
}

// 如果需要引用自身，可以带上函数名。比如递归函数
const f = function fact(x) { if (x <= 1) { return 1; } return x * fact(x - 1); };

[3, 2, 1].sort(function (a, b) { return a - b; });
[3, 2, 1].sort((a, b) => a - b);

let tensquared = (function (x) { return x * x; }(10));

/**
 * 箭头函数
 */
const sum = (x, y) => { return x + y; };
const sum1 = (x, y) => x + y;
const polynomial = x => x * x + 2 * x + 1;

// 对于没有参数的函数，需要使用括号
const constantFunc = () => 42;

// const 返回的return 语句，但是返回的表达式是对象字面量，就必须使用中括号括起来；
const ff = x => { return { value: x }; };
const g = x => ({ value: x });

let filtered = [1, null, 2, 3].filter(x => x !== null);
console.log(filtered);

square = [1, 2, 3, 4].map(x => x * x);

/**
 * 嵌套函数
 */
function hypotnuse(a, b) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(a) + square(b));
}

printprops({ x: 1 });
total = distance(1, 2, 3, 4);
probability = factorial(5) / factorial(3);

// 条件式调用
const params = ((x, y) => { return x + y; })?.(10, 20);

// 定义并调用函数
const strict = (function () { return !this; })();

// 递归函数和调用栈


// 方法调用
let calculator = {
    operand1: 1,
    operand2: 2,
    add() {

    }
}


