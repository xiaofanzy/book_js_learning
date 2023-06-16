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
console.log(params);

// 定义并调用函数
const strict = (function () { return !this; })();

// 递归函数和调用栈


// 方法调用
/**
 * 方法就是js的函数，只不过他保存为对象的属性而已
 */
let calculator = {
    operand1: 1,
    operand2: 2,
    add() {
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();
console.log(calculator.result);

// 方法调用可能设计到更复杂的属性访问表达式
// customer.surname.toUpperCase();
// f().m();

let o = {
    // 方法， 这里this 指向的是调用它的对象o
    m: function () {
        let self = this;
        console.log(this === o);;
        f();

        // 这里是当作函数使用，this 指向的就是全局变量或者是undefined;
        function f() {
            console.log(this === o);
            console.log(self === o);    //我们通过使用this == self 做了一次桥接，然后获取到指向o的this 值
        }
        console.log("===============");
        // 或者采用下面两种方式
        const f1 = () => { console.log(this === 0); };
        const f2 = (function () { console.log(this === 0); }).bind(this);
    }
}
o.m();




