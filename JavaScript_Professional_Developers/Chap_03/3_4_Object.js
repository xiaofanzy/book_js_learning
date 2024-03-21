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
