/**
 * 创建数组对象
 * 
 * 1. 数组字面量
 */

//1. 数组字面量
//数组的值可以是任意表达式；
let empty = [];
let primes = [2, 3, 5, 7, 99];
let misc = [1.1, true, "a",];

let count = [1, , 3];
console.log(count.length);  //3

//扩展操作符； 这是一个浅复制的操作
let a = [1, 2, 3];
let b = [1, ...a, 4];
console.log(b); // a 和 b 的结合；

//  扩展操作符是一种浅复制的便捷方式；
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0;
console.log(original[0]);
// 或者使用Array.from()
copy = Array.from(original);
copy[0] = 0;
console.log(original[0]);

//  将任意字符转换为单个字符的数组
let digits = [..."0123456789"];
console.log(digits);    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 取出集合对象的不重复元素，可以通过set
let letter = [..."hello world"];
console.log([new Set(letter)]);

/**
 * Array()构造函数
 */
// 不传参调用
a = new Array();

//传参调用 传入一个长度 就是指定长度
b = new Array(1);   //创建一个指定长度的数组；
// 传参调用 传入多个元素，或者传入一个非数字元素
a = new Array(1, 2, 3);

/**
 * Array.of() 返回由一组元素组成的数组
 */
Array.of(1, 2, 3);
Array.of(); //创建一个空数组；

// Array.from其实是一个类数组对象转换为数组对象的思路；

// 读写数组元素
a = ["world"];
let value = a[0];

// 访问对象的数组索引的时候，注意的是，索引是转换为字符串的，所以下面的方式需要注意
let o = {};
o[1] = "one";
console.log(o[1]);  //one
console.log(o["1"]);    //one

//非负整数索引 会创建一个字符串，正数索引会创建一个下标；
a[-1.23] = true;
a["1000"] = "111";  // 第1001 个元素是111；
a[1.000] = "232";   // 第二个元素a[1] =1

// js 中没有越界现象，不存在的属性都会返回 undefined;
a = [true, false];
console.log(a[2]);  //undefined











