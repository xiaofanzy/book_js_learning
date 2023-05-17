/**
 * 显式转换
 */

// 除了 null 和 undefined 之外的所有值都有tostring()方法
Number("3");
String(false);
Boolean([]);

// 隐式类型转换
let x = 3;
x + "";
+ x;
x - 0;  //
!!x; //

// number 的 tostring()方法；
// toString 的默认底数是10 ，可以指定为其余的；
let n = 17;
let binary = "0b" + n.toString(2);
let octal = "0o" + n.toString(8);
let hex = "0x" + n.toString(16);


// 控制小数位数
let y = 123456.789;
// 展示完整位数，不够的0填充
console.log(y.toFixed(2));
console.log(y.toFixed(3));
console.log("--------------------------------");
//使用指数，2代表小数点后面保留几位,这个会比小数点前1位；
console.log(y.toExponential(2));

// 如果是有效数字不足的时候以显示数值的整数部分，他就是会使用指数计数法；
console.log(y.toPrecision(2));  //1.2e+5
console.log(y.toPrecision(10)); //123456.7890
console.log("--------------------------------");
// 字符串转换函数；
parseInt("3 blind mice");
parseInt("  3.14 meters");
let result = parseInt(".1");
console.log(result); // NAN
result = parseFloat(".1");
console.log(result); //0.1
//parseInt 可以接受第二个参数，作为指定解析的底数；
result = parseInt("11", 2);
console.log(result);    // 3


