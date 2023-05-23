/**
 * 函数自定义表达式
 */
let square = function (x) { return x * x };


//访问属性表达式；
/**
 * expression.identifier
 * expression[expression];
 */

let o = { x: 1, y: { z: 3 } };
let a = [o, 4, [5, 6]]
console.log(o.x);
console.log(o["x"]);
console.log(a[2][1]);

/**
 * 条件属性访问：
 * expression ?.identifier
 * expression ?.[expression]
 */

a = { b: null };
//console.log(a.b.c.d);   //这样会报错
//这里的 当条件属性访问的对象是undefined的时候，就会形成断路，导致直接是undefined ,否则a.b?.c就是TypeError那么a.b?c.d就是会报错；
console.log(a.b?.c.d);  //undefined

let p;
let index = 0;
p?.[index++];   //注意这种是断路操作，代表的是如果p为 undefined 则 后面的index不会发生变化；
try {
    a[index++];
} catch (e) {
    index;
}

console.log(index); //0   自增。发生了++；

//调用表达式
function sq(x, log) {
    if (log) {
        log(2);
    }
    return x * x;
}

//可以改写为
function squares(x, log) {
    log?.(x);
    return x * x;
}

/**
 * o.m(); 常规属性访问， 常规调用 这种就是常规访问
 * o?.m() 条件式属性访问，常规调用 这种事对象不知道有没有
 * o.m?.() 常规属性访问， 条件式调用 这种事属性不知道有没有
 */

//对象创建表达式
new Object();
// new Point();
//如果不传参，则可以省略括号；

// 操作符：

// 操作符副作用
-(3 ** 2) //if not concated width is wrong
console.log(1 + "2");
console.log("1" + 2);
// TODO 位运算
//位运算是很麻烦的一种运算方式。
console.log(-1 >>> 4);  //268435455
console.log(NaN !== NaN);

let point = { x: 1, y: 2 };
console.log("x" in point);  //true

console.log("toString" in point); //true

//如果是数组，则返回的的下标是不是在里面
point = [7, 8, 9];
console.log("0" in point);  //true
console.log("7" in point); //false

//instance操作符
let d = new Date();
console.log(d instanceof Date); //true
console.log(d instanceof Object);   //true
console.log(d instanceof Number); //false

o = { x: 1 };
p = null;
o && o.x;
p && p.x;

//MD 这个方法倒是有意思
//当 a === b 的时候，才会执行stop方法，这样连if都省了；
(a === b) && stop();

// || 这个方法习惯用法是在一系列备选项中选择一个真值；
// 如果maxWidth 为 null  则看preferenct.maxWidth 如果还没有就使用硬编码 500
let max = maxWidth || preferenct.maxWidth || 500;

// 2. 给参数提供默认值；
function p(o, pp) {
    pp = pp || {};  //如果pp为空的时候，则给他附一个对象值；
}

// 德摩根定律
!(p && q) === (!p || !q)
!(p || q) === (!p && !q);

eval("3 + 2");