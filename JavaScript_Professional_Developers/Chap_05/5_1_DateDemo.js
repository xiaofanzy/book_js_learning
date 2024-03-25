/**
 * Date 类型
 */

// 要创建日期,可以使用new Date 创建
let now = new Date();

/**
 * Date.parse():
 *  接受一个日期作为字符串,返回字符串的毫秒数;
 *  - 月/日/年”，如"5/23/2019"；
 *  - “月名 日, 年”，如"May 23, 2019"；
 *  - 周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；
 *  - YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00
 */
let someDate = new Date(Date.parse("May 23, 2019"));
// 也可以不用显式的调用
someDate = new Date("May 23, 2019");
console.log(someDate);

/**Date.UTC() 年、零起点月数（1 月是 0，2 月是 1，以此类推）、日（1~31）、时（0~23）、
 *  分、秒和毫秒。这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为 1 日。其他
 *  参数的默认值都是 0
 */
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
let y2k = new Date(2000, 0);
allFives = new Date(2005, 4, 5, 17, 55, 55);

// 间隔
let start = Date.now();
/**DO SOME THINGS */
let end = Date.now();
let between = start - end;
console.log(between);

console.log(start.toString());
console.log(start.toLocaleString());

// 注意,当为月份为0 的时候,往前退了一个月,是2018年12月31日了
let date1 = new Date(2019, 0, 1);
console.log(date1);

// 注意,我们下面的方法使用的全部都是new Date()创建的类,当使用start 就是上面的变量的时候,
// 就不行;
const today = new Date();
const year = today.getUTCFullYear();
console.log(`当前年份：${year}`);
