/**
 * 原始值包装类型
 */

let s1 = "some text";
/**
 * 一般来说,原始值是不允许这么操作的,但是这么操作可行是因为将原始值转换成包装类型了
 */
let s2 = s1.substring(2);

/**
 * 引用类型与原始值包装类型的主要区别是生命周期,new 实例化在作用域内一直存在
 * 而包装类对象只存在于访问他的那行代码执行期间;
 */
s1.color = "red"; // 这行代码等于使用了包装类,但是使用完,被销毁了;
console.log(s1.color); //undefined  // 这里的String对象和上面的不是一回事

// new 构造函数和 转型函数不一样;
let valueE = "25";
let numberE = Number(valueE);
console.log(typeof numberE); // number
let valueO = new Number(25);
console.log(typeof valueO); //object

/**
 * Boolean
 */
let booleanObject = new Boolean(true);
console.log(typeof booleanObject); //object
let falseVale = false;
console.log(typeof falseVale); // false
console.log(falseVale instanceof Boolean); //false
console.log(booleanObject instanceof Boolean); //true

/**
 * Number:
 *
 */
let num = 10;
console.log(num.toFixed(2)); // 保留几位小数
console.log(num.toExponential(1)); // 科学计数法
console.log(num.toPrecision(1)); // js自己判断

//不建议直接实例化Number对象. 最重要的是对象是无法进行加减乘除的,既然有包装类,那么我们直接使用原始类型即可
let numberObject = new Number(10);
let numberValue = 10;
console.log("-----------------");
console.log(typeof numberObject); //object
console.log(typeof numberValue); //number;

// 判断是不是整数
console.log(Number.isInteger(19));

// 是否超越范围
// Number.MAX_VALUE -> false;
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));

/**
 * Strin
 */

let stringValue = "hello World";
console.log(stringValue.length);
console.log(stringValue.charAt(2));

//ab😊de
console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101));

// 字符串操作方法
stringValue = "Hello";
let stringResult = stringValue.concat(" world", " !");
console.log(stringResult);

// 截取字符串
// 这玩意要是有负数,就从后往前数;
// slice(a,[b]) a代表起始位置, b代表截取的长度
console.log(stringResult.slice(3, 7));
// substring 同理;
console.log(stringResult.substring(3, 7)); //lo w
