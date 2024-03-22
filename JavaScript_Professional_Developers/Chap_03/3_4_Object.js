/**
 * 3.4 数据类型
 */

// typeof
typeof null; // object
typeof 95; // number
typeof "sstring"; //string

// undefined
// 当let 申明了一个变量,没有初始化,默认就是undefined
let message;
console.log(message == undefined);

// 没有申明过的变量会报错,没有初始化的变量会是undefined;
console.log(message);
// console.log(age);// error

// 但是对没有申明的变量typeof的时候,还是undefined;
console.log(typeof age);

// 3. Null 类型
// typeof null -> Object
let car = null;
console.log(typeof car);

// 查了gpt ,gpt表示当需要延迟赋值的情况下,不初始化更合适,当立即赋予对象的时候,可能初始化null更合适

// 4. number 类型
let intnum = 55;
// 0[0-7] 八进制
let intOctal = 0o72;
// 十六进制
let hexNum1 = 0xa;

// 4-1. 浮点数
// 默认类型是整数,ecmascript总是趋向于把.0转换为整数;
let numTen = 10.0;
// 4-2 科学计数法
let floatNum = 3.12e7;
// 浮点数的取值不如整数精确
let result = 0.1 + 0.2;
console.log(result); //0.30000000000000004

// 值的范围;
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// 4-3 NaN
// 当两个0相除的时候,会返回NaN,当分子非0的时候,则会返回Infinity
console.log(0 / 0); //NaN
console.log(5 / -0); //-Infinity

// NaN 不包含Nan在内的任何值,下面的操作会返回false;
console.log(NaN == NaN);
console.log(isNaN(NaN));
console.log(isNaN("True")); //true 是因为isNaN是针对数值而言的,字符本来就不是数值

// 4-4.数值转换
/**
 * Number:
 * 1. boolean 1 0
 * 2. number 直接返回
 * 3. null -> 0
 * 4. undefined ->NaN
 * 5. 字符串 是数值的就是转换为数值,非数值的就是NaN;
 * 6. 对象 obj -> 1. valueof(obj) > 2. if(NaN) obj.toString();
 *  */
console.log(Number("123abc"));

//parseInt 从第一个数字一直取到非数字的那个
parseInt("123abc");
parseInt(""); //NaN
parseInt("12", 10); // params2 可以填 2 8 10 16

// 4-5 String 类型
let firstName = "John";
let lastName = "Join";
let lastName2 = `test`;

// length 获取长度
let text = "This is ";
console.log(text.length);

// 字符串不可变;
let lang = "Java";
lang += "Script"; // 新增一个足够容纳10个字符的空间,然后销毁java 和script
console.log(lang);

// 转换为字符串,就是使用toString()方法;
let ages = 11;
let ageString = ages.toString();
let found = true;
let foundString = found.toString();

// null  和undefined 没有toString()方法
// 对于number而言,toString() 可以加一个底数
let numS = 10;
console.log(numS.toString(2));

// 对于不确定null 或者undefined 而言,可以调用String()方法
//  1. 有toString就返回toString() ,没有就返回Understand 或者null
let value4;
console.log(String(value4));

//5 模板字面量
let myMultiLineString = `first line\nsecond line`;
console.log(myMultiLineString);
let myMultiLineString2 = `fristline
second like`;
console.log(myMultiLineString2);

// 需要注意换行和排版
// 1. 如果对齐,则长度会有变化
let myMultiLineString3 = `first name
                          last name`;
console.log(myMultiLineString3.length); //46

// 2. 下面多了一个换行符
let myMultiLineString4 = `
first line
secode line`;
console.log(myMultiLineString4);

let value5 = 5;
let exponent = "second";
let interpolatedString =
  value5 + "to the " + exponent + " power is " + value5 * value5;
// 使用模板字面量就可以这么写
interpolatedString = `${value5} to the ${exponent} power is ${value5 * value5}`;
console.log(interpolatedString);

// 嵌套模板的字符串无需转义
console.log(`Hello ${`world`}`);
let foo = { toString: () => "world" };
console.log(`Hello ${foo}`); // 注意不要带括号

// 在插值表达式中可以调用函数和方法;
function capitalize(words) {
  return `${words[0].toUpperCase()}${words.slice(1)}`;
}
console.log(`${capitalize("hello")}, ${capitalize("world")}!`);

// 模板可以插入自己之前的值
let value = "";
function append() {
  value = `${value}abc`;
  console.log(value);
}
append();
append();
append();

// 模板字面量标签函数
function simpleTag(strings, ...expressions) {
  console.log(strings);
  for (const expression of expressions) {
    console.log(expression);
  }
  return "foolbar";
}

let a = 6,
  b = 9;
let targetResult = simpleTag`${a} + ${b} = ${a + b}`;
console.log(targetResult);

function zipTag(strings, ...expressions) {
  return (
    strings[0] + expressions.map((e, i) => `${e}${strings(i + 1)}`).join("")
  );
}

targetResult = zipTag(`${a} + ${b} = ${a + b}`);

// 原始字符串,
console.log(`\u00A9`);
console.log(String.raw`\u00A9`);

// 使用.raw属性获取原始内容
function printRaw(strings) {
  console.log("Act...");
  for (const string of strings) {
    console.log(string);
  }

  for (const string of strings.raw) {
    console.log(string);
  }
}

// 6 Symbol类型
// 符号实例是唯一 不可变的,覆好的用途是确保属性使用唯一标识符,不会发生冲突

// 基本用法
let sum = Symbol();
console.log(typeof sum);

let genericSymbol = Symbol("foo");
let otherGenericSymbol = Symbol("foo");
console.log(genericSymbol == otherGenericSymbol);
console.log(sum);
console.log(genericSymbol);

// Symbol 么有new 直接Symbol就可以了
let emptyGlobalSymbol = Symbol.for("foo");
console.log(Symbol.keyFor(emptyGlobalSymbol));

// for 创建的是全局符号, 没有for事普通符号
let s = Symbol.for("s"); // global
let s1 = Symbol("s"); //  simple

// 属性
let a1 = Symbol("foo");
let a2 = Symbol("bar");
let a3 = Symbol("baz");
let a4 = Symbol("quz");

let o = {
  [a1]: "fo baz",
};

console.log(o);

o[a2] = "bar baz";
console.log(o);

Object.defineProperties(o, {
  [a3]: { value: "baz val" },
  [a4]: { value: "qux val" },
});

console.log(o);

//TODO 没看明白的;
let t1 = Symbol("foo");
let t2 = Symbol("bar");

let o1 = {
  [t1]: "foo val",
  [t2]: "bar val",
  baz: "baz val",
  qux: "qux val",
};
console.log("0-----------------0");
console.log(Object.getOwnPropertySymbols(o1));
console.log("0-----------------0");
console.log(Object.getOwnPropertyNames(o1));
console.log("0-----------------0");
// 同时包含常规和覆好属性描述符的对象
console.log(Object.getOwnPropertyDescriptors(o1));
console.log("0-----------------0");
console.log(Reflect.ownKeys(o1));

// 如果没有显示的保存属性的引用,那么必须遍历才能找到响应的属性键
let o2 = {
  [Symbol("foo")]: "bar val",
  [Symbol("acc")]: "acc val",
};
console.log(o2);
let barSymbol = Object.getOwnPropertySymbols(o2).find((symbol) =>
  symbol.toString().match(/foo/)
);
console.log(barSymbol);
console.log("-----------------");
// TODO Symbol.asyncIterator 一个方法,该方法返回对象默认的asyncIterator,有for -await-of 语句使用,实现异步迭代器
//
class Foo {
  async *[Symbol.asyncIterator]() {}
}

let f = new Foo();
console.log(f[Symbol.asyncIterator]());

class Emitter {
  constructor(max) {
    this.max = max;
    this.asyncIdx = 0;
  }

  async *[Symbol.asyncIterator]() {
    while (this.asyncIdx < this.max) {
      yield new Promise((resolve) => resolve(this.asyncIdx++));
    }
  }
}

async function asyncCount() {
  let emitter = new Emitter(5);

  for await (const x of emitter) {
    console.log(x);
  }
}

asyncCount();
console.log("---------------------");
//  一个方法,该方法决定一个构造器兑现是否认可一个对象是他的实例.
function Foo1() {}
let f1 = new Foo1();
console.log(f1 instanceof Foo1);
console.log("---------------------");
console.log(Foo1[Symbol.hasInstance](f1));

// 可以通过静态方法重新定义这个类
// 注意这个是类,不是方法;
class Bar {
  static [Symbol.hasInstance]() {
    return false;
  }
}

let bar = new Bar();
console.log(bar instanceof Bar);

// Symbol.isConcatSpreadable 一个布尔值,如果是true,则意味着对象可以使用Array.protopyte.concat()打平其数组元素
// Array.protopyte.concat() 接受一个数组,将其拼接成数组实例
let initial = ["foo"];
let array = ["bar"];
console.log(array[Symbol.isConcatSpreadable]); //undefined
console.log(initial.concat(array)); // false
console.log("---------------------F");
array[Symbol.isConcatSpreadable] = false;
console.log(initial.concat(array));
console.log("---------------------T");
array[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(array));
// 但是当不是类数组的情况下,就会被忽略;
let otherObject = new Set().add("qux");
console.log(array[Symbol.isConcatSpreadable]);
console.log(initial.concat(otherObject));
otherObject[Symbol.isConcatSpreadable] = true;
console.log(initial.concat(otherObject));

//  一个方法,该方法返回对象默认的迭代器,for-of语句使用
class Emitters {
  constructor(max) {
    this.max = max;
    this.idx = 0;
  }

  *[Symbol.iterator]() {
    while (this.idx < this.max) {
      yield this.idx++;
    }
  }
}

function count() {
  let emitter = new Emitters();
  for (const x of emitter) {
    console.log(x);
  }
}

count();

// 一个曾泽表达式,该方法用正则表达式去匹配字符串,由string.prototype.match()方法使用
class Footmatcher {
  static [Symbol.match](target) {
    return target.includes("foo");
  }
}

console.log("foobar".match(Footmatcher));
console.log("barbaz".match(Footmatcher));

class StringMatcher {
  constructor(str) {
    this.str = str;
  }

  [Symbol.match](target) {
    return target.includes(this.str);
  }
}

let fooMatcher = new StringMatcher("foo");
console.log("foobar".match(fooMatcher));
console.log("barbaz".match(fooMatcher));

// Sybmol.replace 一个方法,该方法用于替换字符串中匹配的子串,由String.prototype.replace()方法使用
class FOoReplacer {
  static [Symbol.replace](target, repalcement) {
    return target.split("foo").join(repalcement);
  }
}

console.log("barfoobaz".replace(FOoReplacer, "qux"));

// Symbol.search 一个方法,该方法用于返回字符串中匹配的索引,由String.prototype.search()方法使用
class FooSearcher {
  static [Symbol.search](target) {
    return target.indexOf("foo");
  }
}
console.log("---------------------");
console.log("foobar".search(FooSearcher));
console.log("barbaz".search(FooSearcher));

class StringSerarcher {
  constructor(str) {
    this.str = str;
  }

  [Symbol.search](target) {
    return target.indexOf(this.str);
  }
}
console.log("------------------------------");
console.log("foobar".search(new StringMatcher("foo")));
console.log("------------------------------");

// 一个函数值,该函数作为创建派生对象的构造函数;
// 说白了就是避免暴露继承类;
class Bars extends Array {}
class Bazs extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let barz = new Bars();
console.log("---------------------1");
console.log(barz instanceof Array);
let bazz = new Bazs();
bazz = bazz.concat("baz"); //
console.log(bazz instanceof Bazs);

//Symbol.split 一个正则表达式,该方法在匹配转给您则表达式的索引位置拆分字符串,由 String.protopyte.split() 方法使用
class FooSpliter {
  static [Symbol.split](target) {
    return target.split("foo");
  }
}
console.log("---------------------2");
console.log("barfoobaz".split(FooSpliter));

class StringSpliter {
  constructor(str) {
    this.str = str;
  }

  static [Symbol.split](target) {
    return target.split(this.str);
  }
}

console.log("barfoobaz".split(new StringSpliter("foo")));

//Symbol.toPrimitive 一个方法,该方法讲对象转换为响应的原始值;
class Bar2 {
  constructor() {
    this[Symbol.toPrimitive] = function (hint) {
      switch (hint) {
        case "number":
          return 3;
          break;
        case "string":
          return "String bar";
          break;
        case "default":
        default:
          return "default bar";
          break;
      }
    };
  }
}
console.log("---------------------3");
let barrr = new Bar2();
console.log(3 - barrr);
console.log(3 + barrr);
console.log(String(barrr));
console.log("---------------------4");

//Symbol.toStringTag 一个字符串,该字符串用于创建对象的默认字符串描述

console.log(barrr.toString());
class Bar3 {
  constructor() {
    this[Symbol.toStringTag] = "bar"; //[object Object]
  }
}

let barr3 = new Bar3();
console.log(barr3.toString()); //[object bar]

//Symbol.unscopables 一个对象,该对象所有的以及继承的属性,都会从关联对象的with环境中绑定中删除;
let ooo = { foo: "bar" };
with (ooo) {
  console.log(foo);
}

// TODO 看完了,但是没看明白,问了GPT还不行,等看完再继续吧;

// 8 Object 类型
let oo = new Object();

/**
 * object 都有属性和方法;
 * 1. constructor,指向用于创建当前对象的函数
 * 2. hasOwnProperty() 检查属性是否在实例中,而不是原型中
 * 3. isPrototypeOf() 检查对象是否是另一个对象的原型
 * 4. propertyIsEnumerable() 检查给定的属性是否可以使用for-in枚举
 * 5. toLocaleString() 返回对象的字符串表示,与执行环境的地区对应
 * 6. toString() 返回对象的字符串表示
 * 7. valueOf() 返回对象的字符串,数值或布尔表示
 */
