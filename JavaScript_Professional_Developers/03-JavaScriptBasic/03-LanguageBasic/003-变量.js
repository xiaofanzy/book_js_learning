/**
 * var let const
 */
// var
var message = "hi";
message1 = 100; // 合法，但是不推荐

// var 申明作用域
function test() {
  // 局部变量的作用域在方法内
  var message2 = "cc";
  // 当省略var的时候，就可以创建一个全局变量
  message3 = "ddd";
}

//console.log(message2); //error
//console.log(message3); //好像也不行了

//定义多个变量可以通过逗号分隔
var message4 = "hi",
  found = false,
  age = 29;

// var 声明提升
// 关键字申明的变量会自动提升到函数作用域顶部
function foo() {
  console.log(age);
  var age = 26;
}

foo(); //undefined

/**
 * let 声明
 */
// let 申明范围是块作用域，var声明是函数作用域
if (true) {
  var name1 = "Matt";
  console.log(name);
}
console.log(name1);
if (true) {
  let name2 = "tom";
  console.log(name2);
}

//console.log(name2);

// let 不允许冗余申明
// 当同一个块中没有重复声明是被允许的
let age2 = 30;
console.log(age2);
if (true) {
  let age2 = 26;
  console.log(age2);
}

console.log(age2);

// 1. var有申明提前，let存在暂时性死区；
console.log(age3);
var age3 = 26;

// console.log(age4);
// let age4 = 25;

// 2. var 会变成全局属性、但是let不会；
var name3 = "tom";
console.log(window.name3); //tom
let name4 = "jake";
console.log(window.name4);

// for循环中的let申明
for (var i = 1; i < 5; i++) {}
console.log(i); //5

for (let j = 1; j < 5; j++) {}
//console.log(j); //j is not defined

//
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i));
}

for (let j = 0; j < 5; j++) {
  setTimeout(() => console.log(j));
}

/**
 * const
 *
 *
 */

// const 修改会导致运行报错
const age5 = 29;
// const also can't replace tiwce;
// const age5 = 22;

// const 作用域也是快
const name6 = "Matt";
if (true) {
  const name6 = "Nicos";
}
console.log(name6);

// const 申明的变量不允许变动，所以只能这么用
let i = 0;
for (const j = 7; i < 5; i++) {}
// can't use for this
// for (const j = 9; j < 4; j--) {}

// suggest
// not use var first use const then let
