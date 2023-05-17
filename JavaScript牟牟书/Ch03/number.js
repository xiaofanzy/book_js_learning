/*
    数值字面量： 数值出现在js程序中的时候；
*/

/* 整数字面量：基数为10的整数可以直接写成数字序列；
   浮点字面量：可以包含小数点；实数值由数值的整数部分，小数点和整数的小数部分组成；
*/

// 数值之间的分隔符；
let billion = 1_000_000_000;    //作为千位分隔符
let bytes = 0x89_AB_CD_EF;  //作为字节分隔符

// 上溢 infinity、下溢 -infinity、NAN;
// 注意 1/0 = Infinity 0/0 = NaN
let number = 0 / 0;
Number.isNaN(number);
/* let flag = number.isNaN();
console.log(flag); */

// 对于作为除数使用的情况下。几乎无法区分这两个值；
let zero = 0;
let negz = 0;
console.log(zero === negz);
console.log(1 / zero === 1 / negz);
console.log("-----------------");

// 二进制浮点数和舍入错误；
//  所谓的摄入错误，就是指js可以近似的表示一个值，但是无法精确的表示，从而导致一些类似值；
let x = .3 - .2;
let y = .2 - .1;
console.log(x === y);   //false

// BigInt : 就是数字后面+n 可以通过前缀控制进制；
1234n
0b11111n
0o7777n
0x80000000000n

//转化
BigInt(Number.MAX_SAFE_INTEGER);
let string = "1" + "0".repeat(100);
BigInt(string);

//bigint 除法取余会向下舍入
console.log(3000n / 997n);
console.log("--------------");
// bigint 混合操作，
console.log(1 < 2n);
console.log(0 == 0n);   //true
console.log(0 === 0n);  //false
//但是math对象不接受bigint的操作；


console.log(Number([]));    // 0
console.log(Number([99]));  //99

