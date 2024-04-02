/**
 * 生成器
 */

// 生成器函数基础
// 声明
function* generatorFn() {}
// 生成器函数表达式
let generatorF = function* () {};

// 作为对象字面量的方法生成器函数
let foo = {
  *generatorFn() {},
};

// 作为类实例的生成器函数
class Foo {
  *generatorFn() {}
}

// 作为类静态方法的生成器函数
class Bar {
  static *generatorFn() {}
}

// 调用生成器函数会生成一个生成器对象,生成器对象一开始处理暂停执行状态,也具有next方法
const g = generatorFn();
console.log(g.next()); // { value: undefined, done: true }

// 和迭代器一样,会生成{ value: undefined, done: true } 对象

// 可以指定生成器函数的返回值;
function* generatorFn1() {
  console.log("foo");
  return "foo";
}
let f = generatorFn1();
console.log(f.next()); // { value: "foo", done: true }

// 生成器函数只会在第二次调用的时候才开始执行

f = generatorFn1(); // 这次不会调用生成器函数
console.log(f.next()); // 这次会;

//
