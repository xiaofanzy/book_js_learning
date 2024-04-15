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

// 生成器对象实现了iterable 接口,他们默认的迭代器是自引用的;
// 所谓的自引用就是可以递归
function* generatorFn2() {}
console.log(generatorFn2);
console.log(generatorFn2()[Symbol.iterator]);
console.log(generatorFn2()[Symbol.iterator]());

const s = generatorFn2();
console.log(s == s[Symbol.iterator]()); // 说明调用的是他自己

// 通过yield 中断执行
function* generatorFn3() {
  yield;
}

let generatorObject = generatorFn3();
console.log(generatorObject.next()); // { value: undefined, done: false }
console.log(generatorObject.next()); // { value: undefined, done: true }

// 生成器内部会针对每个执行流程区分作用域,在每个生成器对象上调用next不会影响其他生成器

// yield 只会对生成器函数内部使用,在其他地方会抛出错误;
/* function* invalidGeneratorFn() {
  function a() {
    yield;
  }
}
 */

// 1. 生成器作为可迭代对象
function* generatorFs() {
  yield 1;
  yield 2;
  yield 3;
}
for (const x of generatorFs()) {
  console.log(x);
}

function* nTime(n) {
  while (n--) {
    yield;
  }
}

for (let _ of nTime(3)) {
  console.log("foo");
}

// 使用yield 实现输出和输入
function* generatorF1(initital) {
  console.log(initital);
  console.log(yield);
  console.log(yield);
}

let foos = generatorF1("foo");
foos.next("bar"); //foo
console.log("baz"); // baz

function* generatorF2() {
  return yield "foo";
}

let fooss = generatorF2();
console.log(fooss.next());
// 这个gpt没有解释清楚,按照他的结束,第一次调用的时候,next 返回的是右侧的值{value: foo,done:false};
// 这点很明显,因为这一次调用返回的yield暂停了,需要下次调用才能判断是不是true;
// 第二次调用传入了一个'bar'参数,这个参数会赋值给yield的左侧,意思就是reutrn 'bar'
// 而这时候,没有yield函数去暂停了,所以这次调用返回的结果是true,
// 这时候,返回的结果就变成了{value:"bar",done:true}
// 书上说,第二次调用是吧bar传递给了yield,这个值被确定为返回的值,也能说得明白
console.log(fooss.next("bar"));

// yield 可以被调用多次
// 这里要是被调用,就会被访问多次
function* gg() {
  for (let i; ; i++) {
    yield i;
  }
}

// 使用生成器实现返回和填充数组
function* range(start, end) {
  while (end > start) {
    yield start++;
  }
}
for (let i of range(4, 7)) {
  console.log(i);
}
