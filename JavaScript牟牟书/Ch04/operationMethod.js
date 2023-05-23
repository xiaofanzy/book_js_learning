/**
 * 其他操作符：
 *  1. 三目运算符
 *  2. 先定义？？
 */

// 先定义：
let a, b;
a ?? b; // 相当于 (a !== undefined && a !== null) ? a: b;
// 这种方式其实是 || 运算的一种演化，对于以前的max对象而言；
//let max = maxWidth || preferences.maxWidth || 500;
//这个参数而言。0 '' 还有false都是假值，但是这个假值是可能完全有效的，当我们使用先定义的语法， 0 就会保留在a这个变量上；
// 此时就可以改写为；
//max = maxWidth ?? performance.maxWidth ?? 500;

//这里的逻辑是， 如果这个值是缺值nulllish 意思就是是null 或者 undefined 的情况下，才执行后面的操作,否则会采用这个值；

let options = { timeout: 0, title: "", verbose: false, n: null };
console.log(options.timeout ?? 100);    // 0
console.log(options.title ?? "undefined");  // ''
console.log(options.quite ?? true); // true
console.log(options.verbose ?? true); // false
console.log(options.n ?? 10); // 10
//如果混用了？？和|| 两个操作符，那么他必须使用括号说明哪个先执行，否则会报错；
// a ?? b || c // SyntaError;
let c;
(a ?? b) || c; //这个是可以的；

/**
 * Typeof 操作符
 */
let value = "n";
//如果是string,则包含在引号中。
(typeof value === 'string') ? "'" + value + "'" : value.toString();

// delete
let o = { x: 1, y: 2 };
delete o.x;
console.log("x" in o);

a = [1, 2, 3];
delete a[2];    //删除数组的最后一位元素，但是保留长度；
console.log(a.length);  //3

/**
 * delete 在普通模式下返回的是true
 * 严格模式下， 当删除变量函数，函数参数的时候，就回包 SyntaError 
 * 尝试删除不可配置的属性的时候，抛出TypeError;
 */
o = { x: 1, y: 2 };
delete o.x; //删除
typeof o.x; // undefined
delete o.x; // true ,始终返回true
delete 1;   // 无意思，但是还是会返回true
delete o;   //不能删除变量；
delete Object.prototype;    //不可删除的属性；




