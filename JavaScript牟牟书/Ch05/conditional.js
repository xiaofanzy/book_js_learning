/**
 * 条件语句 ；switch
 */

function convert(x) {
    switch (typeof x) {
        case "string":
            return x.toString();
            break;
        case "number":
            return x + 1;
            break;
        default:
            return null;
            break;
    }
}

function printArray(a) {
    let len = a.length, i = 0;
    if (len == 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while (i < len);
    }
}

function tail(o) {
    //o.next 为真就继续执行
    for (; o.next; o = o.next);
    return o;
}

let data = [1, 2, 3, 3, 4, 5, 6, 6], sum = 0;
for (const element of data) {
    sum += element;
}
console.log(sum);

/**
 * 对于数组而言，可以进行迭代操作，但是对于对象而言，不能使用forof
 *
//  */
let o = { x: 1, y: 2 };
// for (const element of o) {  //TypeError
//     console.log(element);
// }

// 遍历键
for (const k of Object.keys(o)) {
    console.log(o[k]);
}
// 遍历值；
for (const v of Object.values(o)) {
    console.log(v);
}

//遍历键值对
for (const [k, v] of Object.entries(o)) {
    console.log(k, v);
}

console.log("-----------");
let frequency = {};
for (const letter of "mississppi") {
    if (frequency[letter]) {
        frequency[letter]++;
        console.log(frequency[letter]);
    } else {
        frequency[letter] = 1;
    }
}

console.log(frequency);

//for of 与set map
let text = "na na na na Na Batman";
let wordSet = new Set(text.split(" "));
let unique = [];
for (const word of wordSet) {
    unique.push(word);
}
console.log(unique);

//map
let m = new Map([[1, "one"]]);
for (const [key, value] of m) {
    console.log(key);
    console.log(value);
}


/**
 * 异步迭代
 */

async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk);
    }
}

/**
 * for of  是迭代可迭代独享
 * for in 可以迭代任意对象
 */

o = { x: 1, y: 2 };
a = [], i = 0;
//for in 是将 o 值每一个放到in 前面的a[i++]里面；
for (a[i++] in o);
console.log(a);

//这里a 塞进去的是 0 1 而不是 x y
// 所以建议对于数组使用for of 而不是for in  
for (const i in a) {
    console.log(i);
}
let token = null;
mainloop: while (token != null) {
    continue mainloop;
}

//break 也允许使用 跳转运算符；
/*let matrix = getData();

let sums = 0, success = false;
computeSum: if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                sums += matrix[i][j];
                success = true;
                break computeSum;
            }
        }
    }
    success = true;
}
//如果出现问题，则跳转到这，这样success的值就是false，从而判断到底是哪个出现了问题；
console.log(success);

*/

for (let i = 0; i < data.length; i++) {
    if (!data[i]) continue;
    console.log(data[i]);
}

// return 可以不加表达式，这样就是直接返回

function square(x) {
    return x * x;
}
console.log(square(2));

console.log("=============");

//yield
function* range(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}

//try
try {
    let n = Number(prompt("请输入数字"));
    let f = factorial(n);
    console.log(n + "! = " + f);
} catch (e) {
    console.log(e);
}

function parseJSON(s) {
    try {
        return JSON.parse(s);
    } catch {
        return undefined;
    }
}

// with  弄了一个临时作用域，这个里面的所有都可以使用这个作用域内的变量，但是外边的用不了
with (document.forms[0]) {
    name.value = "";
    address.value = "";
    email.value = "";
}

// 可以等同于
// let f = document.forms[0];
// f.name.value = "";

//export
const PI = Math.PI;
const TAU = 2 * PI;

export { PI, TAU };

