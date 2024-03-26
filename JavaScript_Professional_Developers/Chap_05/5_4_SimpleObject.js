/**
 * 单例内置对象
 */

/**
 * Global
 */

let uri = "http://www.wrox.com/illegal value.js#start";
console.log(encodeURI(uri));
console.log(encodeURIComponent(uri));

// eval 方法
// 在里面调用语句
eval(console.log("hello"));

// window对象
/* var color = "red";
function sayColor() {
  console.log(window.color);
}

window.sayColor(); */

// 获取global的另外一种方式
let global = function () {
  return this;
};

/**
 * Math
 */

let max = Math.max(3, 54, 2, 1);
console.log(max);
let values = [1, 2, 3, 4, 5, 6];
max = Math.max(...values);

// 舍入方法
// Math.ceil 方法始终向上舍入围最接近的整数
console.log(Math.ceil(25.9));
// Math.floor 方法始终向下舍入围最接近的整数
console.log(Math.floor(25.9));
// math.round 方法执行四舍五入
console.log(Math.round(25.8));
// Math.fround 方法返回值最接近的浮点数表示法;
console.log(Math.fround(25.8));

// random方法
//  number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)
// 1 - 10
let num = Math.floor(Math.random() * 9 + 2);

//随机生成最大最小值的中间值
function selectFrom(lowerValue, upperValue) {
  let choice = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choice + lowerValue);
}

// 加密型更高的方法;
let secret = new Uint8Array(4);
// secret 会是一个数组
window.crypto.getRandomValues(secret);
console.log(secret[0]);
