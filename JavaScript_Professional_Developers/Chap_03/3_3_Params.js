/**
 * 3.3 变量
 */

// 1. var 关键字
var message;
var message = "hi";
message = 100;

// var 声明作用域
// 对于临时变量,函数退出时销毁,如果内部省略了 var 则会被提升为全局变量
function test() {
  var message = "hi"; // 局部
  messageGolbal = "hi"; // 全局
}

// var 声明提升 所有变量申明都拉倒作用域顶部
function foo() {
  // age 会提升到最前面
  console.log(age);
  var age = 60;
}

foo();
console.log("--------------");
// 2. let 关键字
// 作用域不同, let 作用域是块,var 作用域是函数作用域
// 作用域是函数作用域的子集,var > let
console.log(message);

function test() {
  let messageLet = "hi";
}
console.log("--------------");
//console.log(messageLet);

// 当嵌套的时候,不会报错;
let name = "Tom";
if (true) {
  let name = "Jake";
  console.log(name); // name
}

// let声明没有作用域提升,会出现暂时性死区
//console.log(nameDied);
let nameDied = "name";

// var声明的变量会变成windows的属性,但是let不会
var nameWin = "Jake";
//console.log(window.nameWin);

// for 循环中的let声明
// var声明迭代变量会溢出
for (var i = 0; i < 5; i++) {}
console.log(i);
// let 声明迭代变量不会溢出;
for (let j = 0; j < 5; j++) {}
//console.log(j);

// !!!
for (var i = 0; i < 5; i++) {
  // 55555 而非0-4 ,原因就是退出的时候迭代变量保存的事循环退出的值
  setTimeout(() => console.log(i));
}
for (let jj = 0; jj < 5; jj++) {
  // 0-4 正常了
  setTimeout(() => console.log(jj));
}
console.log("----------------");
// 3. const 申明 就是c 里面的 const type i const
// const 作用域也是块
const ageConst = 26;
if (ageConst) {
  const ageConst = 30;
}
console.log(ageConst);
console.log("----------------");
// 使用cosnt 循环呢,就可以定死一个数据
let x = 0;
for (const j = 0; x < 5; x++) {
  console.log(j);
}
console.log("----------------");
for (const key in { a: 1, b: 2 }) {
  console.log(key);
}

/**
 * 总结:
 *  1. 最好使用const 其次使用let, 不使用var
 *  2.
 *
 */
