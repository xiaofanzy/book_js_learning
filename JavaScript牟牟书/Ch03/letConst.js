/**
 * let 和 const 
 */

//const x = 1;
/* if (x === 1) {
    let x = 2;
    console.log(x);
} */

//console.log(x);
// let x = 3;

//声明与类型
let i = 10;
i = "ten";

// 解构赋值
/* let [x, y] = [1, 2];
[x, y] = [x + 1, y + 1];
[x, y] = [y, x];
console.log([x, y]); */    //[ 3, 2 ]

// 返回数组的方式异常便捷；
function toPolar(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(x, y)];
}

function toCartesian(x, y) {
    return [x * Math.cos(y), r * Math.sin(y)];
}

let [r, theta] = toPolar(1.0, 1.0);
let [x, y] = toCartesian(r, theta);
console.log([x, y]);

let o = { x: 1, y: 2 };
for (const [i, j] of Object.entries(o)) {
    console.log(i, j); //x 1 y 2
}

// 解构赋值， 变量多则未被设置的就是undefined 值多就是被舍弃
[x, y] = [1];   //x 1 
console.log(x, y);
[x, y] = [1, 2, 3]; //x 1 y 2
console.log(x, y);
[, x, , y] = [1, 2, 3, 4];  //2 4
console.log(x, y);

// 当剩余的值收集到一个变量中的时候，可以使用...这个标记符
[x, ...y] = [1, 2, 3, 4];
console.log(x, y);  //1 [ 2, 3, 4 ]

// 嵌套赋值
let [a, [b, c]] = [1, [2, 2.5], 3];

