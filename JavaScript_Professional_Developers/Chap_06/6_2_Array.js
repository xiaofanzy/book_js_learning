/**
 * Array
 */

// 1. Array declaration
let colors = new Array();
// length of array;
colors = new Array(20);
// save elements in array
colors = new Array("red", "blue", "green");
// alaways can igone new keyword
colors = Array(3);

// always use array literal
colors = ["red", "blue", "green"];
let names = ["tom"];
let values = [1, 2, 3, 4, 5];

//from 将类数组解构转换为数组实例
name = Array.from("Nicholas");
console.log(name);
console.log(Array.from("NIcolas"));

// from 可以将一组参数转换为数组实例
const m = new Map().set(1, 2).set(3, 4);
console.log(Array.from(m));
const s = new Set().add(1).add(2).add(3).add(4);
console.log(Array.from(s));

// 为数组实行浅复制
colors = ["red", "blue", "green"];
let copyColors = Array.from(colors);
console.log(copyColors);

const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  },
};

console.log(Array.from(iter));

function getArgsArray() {
  return Array.from(arguments);
}
// 传入的参数会被转换为数组实例
console.log(getArgsArray(1, 2, 3, 4, 5));
// 但是更推荐的事剩余参数写法
console.log(...[1, 2, 3, 4, 5]);

//from 还可以接受第二个参数,增强执行
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1, (x) => x * x);
console.log(a2);
// 还可以指定第三个参数,表示指定函数中this的值;
const a3 = Array.from(
  a1,
  function (x) {
    return x ** this.exponent;
  },
  { exponent: 2 }
);
console.log(a3);

//array.of 可以把参数转换为数组
console.log(Array.of(1, 2, 3, 4));

// 数组空位 意思就是占位;
const options = [1, , , 4];
console.log(options.length);

for (const option of options) {
  console.log(option === undefined);
}

// map 会跳过空位
console.log(options.map((x) => 6));
// join 会将空位视为undefined
console.log(options.join("-"));
// fill 会将空位视为undefined
console.log(options.fill(6, 1, 3));

/**
 * 数组索引
 */

colors = ["red", "blue", "green"];
colors[2] = "black";
colors[3] = "brown"; // 自动填充
console.log(Array.from(colors));
colors.length = 1; // 删除多余的元素
console.log(Array.from(colors));
// 通过length 增加元素
colors[colors.length] = "black"; // because index is begin from 0

// 检查数组
colors instanceof Array;

// 迭代器方法
const a = ["foo", "bar", "baz", "qux"];
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aentries = Array.from(a.entries());
console.log(aKeys);
console.log(aValues);
console.log(aentries);

// 可以通过[key,value] 的方式拆分键值对
for (const [idx, element] of a.entries()) {
  console.log(idx, element);
}

// copy and fill 指定一个返回,[a,b)
// copywithin()
const zeros = [0, 0, 0, 0, 0];
zeros.fill(5, 1, 3); // 5 在1,2位置填充
console.log(zeros);

let ints,
  reset = () => (ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
reset();

// 复制索引0开始的内容,插入到索引5开始的位置
ints.copyWithin(5); // 从0开始复制到5
console.log(ints); // 0,1,2,3,4,0,1,2,3,4
reset();
// 复制索引5开始的内容,插入到索引0开始的位置
ints.copyWithin(0, 5); // 从5开始复制到0
console.log(ints); // 5,6,7,8,9,5,6,7,8,9

// 复制索引0开始的内容,插入到索引3开始的位置
ints.copyWithin(4, 0, 3);
console.log(ints); // 0,1,2,0,1,2,6,7,8,9

console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf()); // ["red", "blue", "green"]
console.log(colors); // ["red", "blue", "green"]

// toLocaleString , 会调用每个元素的toLocaleString方法
let person1 = {
  toLocaleString() {
    return "Nikolaos";
  },
};

let person2 = {
  toLocaleString() {
    return "Xaris";
  },
};

let people = [person1, person2];
console.log(people.toLocaleString()); // Nikolaos,Xaris

// join 作为分隔符号
colors = ["red", "green", "blue"];
console.log(colors.join("|")); // Nikolaos | Xaris

// 栈方法
colors = new Array();
// return the length of array
let count = colors.push("red", "green");
console.log(count); // 2
count = colors.push("black");
console.log(count); // 3

// first in last out
colors.pop(); // black

// team method
// first in first out
colors = new Array();
count = colors.push("red", "green");

let item = colors.shift(); // it get fisrt element is red

// unshift method is push element to the top
colors = new Array();
count = colors.unshift("red", "green");
console.log(count);

item = colors.pop();
console.log(item); // get last elemnt is green

// list sort method
values = [0, 1, 5, 10, 15];
values.sort(); // sort work with number to string and compare string value
console.log(values);
values.reverse();
console.log(values);

// sort can have a function to compare the max value
function compare(v1, v2) {
  if (v1 < v2) {
    return -1;
  } else if (v1 > v2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(values.sort(compare));
// equals
console.log(values.sort((value1, value2) => value1 - value2));

//operate array
//concat element to array
colors = ["red", "green", "blue"];
let colors_2 = colors.concat("yello", ["black", "brown"]);
// the concat method is always spread the element
console.log(colors_2); // ["red", "green", "blue", "yello", "black", "brown"]
