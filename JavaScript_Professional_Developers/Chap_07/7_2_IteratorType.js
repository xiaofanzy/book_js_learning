/**
 * 迭代器模式:
 */

// 可迭代对象,就是实现了iterator接口的对象,元素有限,遍历顺序无歧义
let arr = [3, 1, 3];
// 或者可以链式调用
let arr1 = new Set().add(1).add(2).add(3);

// 任何实现iterator接口的对象都是可迭代对象,都可以被消费

/**
 * 1. 可迭代协议:
 * - 1. 支持迭代的自我识别能力
 * - 2. 创建实现iterator接口的对象的能力;
 */

// string [] map set arguments NodeList 等都实现了iterator接口
let num = 1;
let obj = {};
console.log(num[Symbol.iterator]);
console.log(obj[Symbol.iterator]);

let str = "abc";
let arrs = [1, 2, 3];
let map = new Map([
  [1, 2],
  [3, 4],
]);
let set = new Set().add(1).add(2).add(3);
//let els = document.querySelectorAll("div");

console.log(str[Symbol.iterator]);
console.log(arrs[Symbol.iterator]);
console.log(map[Symbol.iterator]);
console.log(set[Symbol.iterator]);
//console.log(els[Symbol.iterator]);

// 调用工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); //Object [String Iterator] {}

/**
 * 原生语言特性
 * 1. for -of 循环
 */
let arr2 = ["foo", "bar"];
for (let el of arr2) {
  console.log(el);
}

// 数组结构;
let [a, b, c] = arr2;
console.log(a, b, c);

//扩展操作符
let arr3 = [...arr2];
console.log(arr3);

// array.from() 复制
let arr4 = Array.from(arr2);
console.log(arr4);

// Set 构造函数
let sets = new Set(arr2);
console.log(sets);

// Map 构造函数
let paris = arr.map((k, v) => [k, v]);

// 如果原型链上得父类实现了iterator接口，那么子类也可以实现iterator
class FooArray extends Array {}
let fooArr = new FooArray("foo", "bar");
for (let el of fooArr) {
  console.log(el);
}
