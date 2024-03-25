/**
 * 原始值和引用值
 */

// 原始值 : 最简单的数据 引用值: 多个值构成的对象
// 保存原始值就是按值访问的;实际操作的对象就是对象的引用而非对象的本身;保存引用值的变量是按照引用访问的;

let person = new Object();
person.name = "Nico";
console.log(person.name);

// 1. 原始值不能有属性
let Nname = "Nico";
Nname.age = 37;
console.log(Nname.age); //undefined

// 按值传递的,而非按引用传递的;
function addTen(num) {
  num += 10;
  return num;
}
let count = 20;
let result = addTen(19);
console.log(count);
console.log(result);

// 注意, 原始值使用instanceof 检修原始值,则会返回false,但是u如果是对象,就会返回Object;
console.log(Nname instanceof Object);
console.log(person instanceof Object);
