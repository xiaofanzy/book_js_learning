/**
 * 正则表达式
 */

// let expression = /pattern/flags;
/**
 *  - g 全局   -> global
 *  - i 不区分大小写; => ignoreCase
 *  - m 多行模式; => multiline
 *  - y 粘附模式,查找指定位置之后的字符串 => sticky
 *  - u Unicode 模式,启用Unicuq 匹配 => unicode
 *  - s doALL() 模式,表示元字符,匹配任何字符 => doAll
 */
// 匹配所有at
let pattern1 = /at/g;
// 匹配第一个bat/cat ,忽略大小写
let pattern2 = /[bc]at/i;
// 查找所有at结尾的三字符组合,忽略大小写;
let pattern3 = /.at/gi;
// 匹配第一个[bc]at结尾的,忽略大小写;
let pattern4 = /\[bc\]at/i;
let pattern5 = /\.at/i;

// 也可以使用RegExp,但是转义就比较麻烦;
let pattern6 = new RegExp("[bc]at", "i"); // bat cat
let pattern7 = new RegExp("\\[bc\\]at", "i"); // [bc]at

/**
 * 解释一下:
 * /mom 表示以 mon开头
 * ( and dad( and baby)?)? 表示and dad and baby 这种出现一次或者多次
 * (and dad)? 表示and dad 出现1次或者0次
 * (and baby)? 表示and baby 出现1次或者多次
 */
let text = "mon and dad and baby";
let patterns = /mom( and dad( and baby)?)?/gi;
//let matches = patterns.exec(text);
//console.log(matchesT.input);
//console.log(matchesT.index);
//console.log(matches[0]);

text = "cat, bat, sat, fat";
let pattern8 = /.at/g;
let matches = pattern8.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(pattern8.lastIndex);

let pattern9 = /.at/y;
matches = pattern9.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(pattern9.lastIndex);

// 通过设置lastIndex的方式可以查找这个点后面的第一个
pattern9.lastIndex = 4;
console.log(pattern9.lastIndex);

// 字面量表达式
console.log(pattern5.toString());
console.log(pattern5.toLocaleString());

// 构造属性
text = "this has been a short summer.";
let pattern = /(.)hort/g;

if (pattern.exec(text)) {
  // 两两分组
  console.log(RegExp.input);
  console.log(RegExp.$_);

  console.log(RegExp.leftContext);
  console.log(RegExp["$`"]);

  console.log(RegExp.rightContext);
  console.log(RegExp["$'"]);

  console.log(RegExp.lastMatch);
  console.log(RegExp["$&"]);

  console.log(RegExp.lastParen);
  console.log(RegExp["$+"]);
}

let pattern10 = /(..)or(.)/g;
if (pattern10.test(text)) {
  console.log(RegExp.$1);
  console.log(RegExp.$2);
}
