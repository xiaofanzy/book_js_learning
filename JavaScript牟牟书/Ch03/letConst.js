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

let [first, ...rest] = "hello world";
console.log([first, rest]);

// 右边只要是变量名列表，以逗号分割的就行；
let transparent = { r1: 0.0, g: 0.0, b1: 0.0, a: 0.0 };
let { r1, g, b1 } = transparent;
//但是要保证右边的变量名和左边的变量名相同
console.log(r1, g, b1);

// 简化全局函数；
// 这里将sin 就= Math.sin 了 ，意思就是全局变量中的math.sin 赋值给了sin;
const { sin, cos, tan } = Math;

let points = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
//通过，表示这个值是正确的；
console.assert(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4);

// 复杂解构
let points2 = [{ x: x1, y: y1 }, { x: x2, y: y2 }];
// console.assert(points2 == points);






