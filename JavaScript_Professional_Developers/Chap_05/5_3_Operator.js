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

stringValue = "Hello World";
console.log(stringValue.indexOf("o")); //4
console.log(stringValue.lastIndexOf("o")); //7

stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let positions = new Array();
let pos = stringValue.indexOf("e");
while (pos > -1) {
  positions.push(pos);
  pos = stringValue.indexOf("e", pos + 1);
}
console.log(positions);

// 字符串包含方法;
let message = "foobarbaz";
console.log(message.startsWith("foo"));
console.log(message.endsWith("bar"));
console.log(message.includes("bar"));
console.log(message.includes("bar", 5));

// trim 方法 删除
stringValue = "   Hello World ";
console.log(stringValue.trim());
console.log(stringValue.trimLeft());
console.log(stringValue.trimRight());

// repeat 方法; 重复
stringValue = "na ";
console.log(stringValue.repeat(3) + "batman");

// padStart() 填充字符 第二个参数有就填充,没有就填充空格
stringValue = "foo";
console.log(stringValue.padStart(5, ".")); // a 一共多少位 b 其余位数填充指定字符
console.log(stringValue.padEnd(8, "bar")); // 当填充到指定位置的时候,多余的直接舍弃

// 字符串迭代和解构
message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());

for (const c of "abcde") {
  console.log(c);
}

console.log([...message]);

// 自妇产大小写转换
stringValue = "hello world";
console.log(stringValue.toLocaleLowerCase());
console.log(stringValue.toUpperCase());
console.log(stringValue.toLocaleUpperCase());
console.log(stringValue.toLowerCase());

// 字符串模式匹配方法;
let text = "cat, bat, sat, fat";
let pattern = /.at/;

let matches = text.match(pattern);
let matchs = pattern.exec(text);
console.log(matchs.input);
console.log(matches.index);
console.log(matches.lastIndex);
console.log(matches[0]);

text = "cat,bat,sat,fat";
pos = text.search(/at/);
console.log(pos);

// replace
result = text.replace(/at/g, "cound");
console.log(result);

result = text.replace(/(.at)/g, "word ($1)");
console.log(result);

// replace 第二个参数可以接受一个函数,function(a,b,c) a代表匹配的字符串, b代表匹配的字符串的起始位置, c代表原始字符串
function htmlEscape(text) {
  return text.replace(/[<>]&/g, function (match, pos, orginText) {
    switch (match) {
      case "<":
        return "&lt;";
        break;
      default:
        break;
    }
  });
}

let colorText = "red,blue";
let color1 = colorText.split(",");
console.log(color1);
color1 = colorText.split(",", 1); // 第二个参数是截取几位
console.log(color1);

//localCompare 方法
// 按照首字母排序,一样返回0 不一样首字母在前的返回1
stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); //1 y > b
console.log(stringValue.localeCompare("yellow"));
console.log(stringValue.localeCompare("zoo"));

function determineOrder(value) {
  let result = stringValue.localeCompare(value);
  if (result < 0) {
    console.log(`the String 'yellow' comes before the string ${value}`);
  } else if (result > 0) {
    console.log(`the String 'yellow' comes before the string ${value}`);
  } else {
    console.log(`the String 'yellow' comes before the string ${value}`);
  }
}

determineOrder("brick");
