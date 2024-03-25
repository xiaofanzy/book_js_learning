/**
 * 全局上下纹就是我们的windows 对象,因此所有的var定义的变量和函数都会成为window对象的属性和方法;
 * let 和 const 的定级声明不会定义在全局上下文中,上下文在其所有代码都执行完毕后销毁,包括定义在他上面的函数和变量
 */

var color = "blue";
function changeColor() {
  if (color == "bule") {
    color = "red";
  } else {
    color = "blue";
  }
}

changeColor();

/**
 * 4.2.1 作用域链增强
 */

// 虽然执行上下文分为 全局上下文,函数上下文,eval内部调用的山下文;
// 但是有其他方式来增强作用域链,某些语句会导致作用域前端增加一个上下文,这个上下文在代码执行之后会被删除;
/**
 * try catch  和  with 语句
 */
/* function buildUrl() {
  let qs = "?debug = true";

  with (location) {
    let url = href + qs;
  }
  return url;
}

buildUrl(); */

// 作用域的范围; 当未声明的对象会被提升到全局,什么的对象会被限制在函数块内;
function add(num1, num2) {
  var sum = num1 + num2;
  sum1 = num1 + num2;
  return sum;
}
let result = add(19, 20);
// console.log(sum);
// console.log(sum1);

/**
 * 总结一下 ,var 和let const 不同,前者的作用域是整个全局作用域,对于后面声明的对象,如果前面使用到了,会有类型提升这一操作
 * 而let 和cosnt 的作用域是块,是从上到下执行的.
 * const 声明的变量必须初始化,一旦初始化,就无法再次对其赋值,
 */

// 4. 标识符查找 从内到外;
