/**
 * 属性名是字符串字面量 允许空值
 * 属性值任意；
 */
let empty = {};
let point = { x: 0, y: 0 };
let p2 = { x: point.x, y: point.y };
let book = {
    "main title": "JavaScript",
    "sub-title": "the defintitive guide",

    for: "all audiences",   //for 保留字 但是没有引号
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
}

// 使用 new 创建对象
let o = new Object(); // 类似于{}
let a = new Array(); // 类似于【】
let d = new Date(); //  创建一个当前日期的日期对象
let r = new Map();

/**
 * 通过对象字面量创建的所有对象都有相同的原型对象，可以通过Object.propertype 引用这个原型对象
 * 通过new 操作符和构造函数调用的创建的对象，使用 构造函数.propertype 作为原型
 */
new Array(); //原型是 Array.propertype;
// 几乎所有对象都有原型，但是只有少数对象有 propertype 属性。正是这些有 propertype属性的对象为所有其他对象定义了原型；
// 原型对象连接起来的序列被称为 原型链；比如 Date.prototype 继承自 Object.prototype 继承；

// Object.create(); 创建一个对象 使用第一个参数作为新对象的原型
let o1 = Object.create({ x: 1, y: 2 });
console.log(o1.x + o1.y);

// 如果创建没有原型的新对象，可以传入null.但是null连toString()这种基本方法都没有
let o2 = Object.create(null);

// 如果创建一个普通空对象，可以传入一个 Object.propertype;
let o3 = Object.create(Object.propertype);

// 防止将对象被某个第三方库函数意外修改，这种情况下，不要把对象传给库函数；而要传入一个继承自它的对象，如果这个函数读取这个对象的属性，可以读到继承的值，
// 如果设置这个对象的属性，则修改不会影响原始对象；
let o4 = { x: "don't change this value" };
//library.function(Object.create(o4));

// 查询和设置属性；
let author = book.author;
let name = author.surname;
let title = book["main title"]; // 取的是 main title属性

//js 中这俩种是一样的结果
book.name;
book["name"];   //通过方括号访问，属性名通过字符串表示

let addr = "";
for (let i = 0; i < 4; i++) {
    addr += customer[`address{i}`] + '\n';
}

function computeValue(protfolio) {
    let total = 0.0;
    for (const stock in protfolio) {
        let shares = protfolio[stock];
        let price = getQuote(stock);
        total += shares * price;
    }

    return total;
}

/**
 * 从对象中查询属性x 如果o没有叫这个名字的自由属性，则会从0的原型对象中查询属性x，
 * 如果原型独享没有叫这个名字的自由属性，但是有自己的原型，则会查询这个圆形的原型；
 * 这个过程一直持续，知道找到属性X或者查询到一个原型为null的对象；
 */

o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
q.x + q.y;

/**
 * 原型链里面如果有只读属性，则不允许复制；
 */
let unitcicle = { r: 1 };
let c = Object.create(unitcicle);
c.x = 1, c.y = 2, c.r = 3;
console.log(unitcicle.r);   //1

//逻辑是这样， null 和 undefined 这个值没有属性，所以如果一个对象的属性不存在，
// 则会返回null 或者undefined  那么在对于这个不存在的的属性上面在叠加值的时候，就会报错；

// 惯用写法防止这个现象
// num1；
let surname = undefined;
if (book) {
    if (book.author) {
        surname = book.author.surname;
    }
}
//真厉害这种写法
surname = book && book.author && book.author.surname;
//更有甚者
suranme = book?.author?.surname;

/**
 * 原理：
 * 1. 如果有o只读自由属性p ，不可能设置只读属性
 * 2.如果o上面有只读继承属性，不可能用同名自由属性隐藏只读继承属性；
 * 3. o没有自有属性p，且没有继承只读属性，那么看o的 extensible特性，如果不可扩展，则为false;
 * 4. 如果以上情况都不包括，则可以设置属性p
 */

/**
 * delete : 不操作属性的值，他是属于属性本身的
 * 1. delete 只删除自有属性，不能删除继承属性；只能从源头下手，但是又会影响到所有的继承对象；
 * 2.delete 操作成功或者没有影响（就是删除了不存在的属性），则返回true，
 *   对于非属性访问表达式使用delete ，也会返回true;
 * 3. 对于 configurable 特性为false的属性，不会删除，
 *    通过对象声明或者函数声明创建的全局对象的属性一样，某些内置对象的属性也是不可配置的；
 */

delete book.author;
delete book["main title"];


//2. 
o = { x: 1 };
delete o.x;
delete o.x; //删除不存在的属性
delete o.toString;  //删除继承属性
delete 1;   //删除非属性访问表达式；

//3.
console.log(delete Object.prototype);   //false
// 全局变量不可配置；
var x = 1;
console.log(delete globalThis.x);

function f() {
}
console.log(delete globalThis.f);

//但是如果没有let 或者var修饰，那么就可以删除这个属性
globalThis.x = 1;
delete x;   //这个属性可以删除 但是严格模式下会报错
delete globalThis.x;    //这种方法在严格模式下也是可行的；

// 测试属性 就是测试属性是不是属于这个对象
// 1. in
"x" in o;   //true
"toString" in o;   //true

// 2. hasOwnProperty 自语属性，对于继承的属性，返回false;
o = { x: 1 };
console.log(o.hasOwnProperty("x"));   //true
console.log(o.hasOwnProperty("toString"));   //false

// propertyIsEn   属性的enumerable特性为true，则会返回true,如果是不可枚举的，则会返回false; 属于进一步的细化；
o.propertyIsEnumerable("x");   //true   
o.propertyIsEnumerable("toString");   //false
//但是常规的js代码属性都是可枚举的，使用 Object.propertype创造的才是不可枚举的；
Object.prototype.propertyIsEnumerable("toString");   //false

//或者通常使用！== 这种方式确保其不是未定义的就行了
o.x !== undefined;   //true
o.y !== undefined;   //false
o.toString !== undefined;   // true;    //继承的属性返回的是true；

// 但是in 和 !== 的最重要区别就是， 如果存在属性值为undefined 的情况， in可以判断属性存不存在，!== 不能判断
o = { x: undefined };
console.log(o.x !== undefined); //false
console.log("x" in o); //true
delete o.x;
console.log("x" in o); //false

// 获取所有属性
//  对于可枚举的属性，可以使用for/in 
o = { x: 1, y: 2, z: 3 };
o.propertyIsEnumerable("toString");
for (let p in o) {
    console.log(p); //打印的是key ,而不是value;
}
//跳过继承的属性
for (let p in o) {
    if (o.hasOwnProperty(p)) continue;   // 跳过继承属性；
}

for (let p in o) {
    if (typeof o[p] === "function") continue; // 跳过所有方法
}

// 获取属性名数组
/**
 * 这几种的顺序；
 * 1. 列出名字是非负整数的字符串属性，按照数值min ->Max;
 * 2. 列出所有属性之后，再列出剩下的字符串名字的属性，这些属性按照他们添加到对象的先后顺序列出，
 * 3. 名字按照符号对象的属性按照他们添加到对象的先后顺序列出；
 * 
 * 如果同名属性被枚举，或者不可枚举，那么这个属性就不会被枚举了；
 */
o = { x: 1, y: 2, z: 3 };
//返回对象可枚举自由属性的数组，不包含不可枚举属性，继承属性或者名字是符号的属性symbol
for (const key of Object.keys(o)) {
    console.log(key);
}

//返回对象可枚举自有属性的数组，不包括不可枚举属性，他们的名字是字符串的都返回
for (const key of Object.getOwnPropertyNames(o)) {
    console.log(key);

}

// 返回对象自有属性，无论是否可枚举
for (const key of Object.getOwnPropertySymbols(o)) {
    console.log(key);
}

// 返回所有属性名，无论是否枚举，连符号数形和字符串属性都可以返回
for (const key of Reflect.ownKeys(o)) {
    console.log(key);
}


// 扩展对象
let target = { x: 1 }, source = { y: 1 };
for (const key of Object.keys(source)) {
    target[key] = source[key];
}
console.log(target);

//扩展对象 就是前人栽树后人乘凉；
// 简单的 assgin这个不行，必须通过一个新做的对象，使用默认值复制到新对象中，然后使用o的属性覆盖这些默认值
Object.assign({}, defaults, o);
Object.assign(defaults, o);   //这种方式是行不通的；

//  可以使用扩展操作符
o = { ...defaults, ...o };

// assgin 的重写
function merge(target, ...sources) {
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            if (!(key in target)) {
                target[key] = source[key];
            }
        }
    }

    return target;
}

console.log(Object.assign({ x: 1 }, { x: 2, y: 3 }, { x: 4, y: 5, z: 6 }));
console.log(merge({ x: 1 }, { x: 2, y: 3 }, { x: 4, y: 5, z: 6 }));


function merges(target, ...sources) {
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            if (!(key in target)) {
                target[key] = source[key];
            }
        }
    }
}


/**
 * 序列化对象：
 * json 语法是js的自己，不能表示所有的js的值；
 * 可以序列化和恢复的值包括： 对象、数组、字符串、有限数值、true、false、 null、(NaN、Infinity、-Infinity) 会被转换为null
 * 
 * RegExp和error对象以及 undefined 值不能被序列化或者恢复，
 * 
 * JSON.stringify 只序列化对象的可枚举属性，如果属性值无法被序列化，则该属性会从输出的字符串中删除；
 */

o = { x: 1, y: { z: [false, null, ""] } };
let s = JSON.stringify(o);  //转换为字符串
console.log(s);
console.log(JSON.parse(s)); //将字符串转换为对象；

/**
 * 对象方法：
 *
 */
// toString()
s = { x: 1, y: 2, z: 3 }.toString();
console.log(s);

point = {
    x: 1,
    y: 2,
    // 重写toString方法；
    toString: function () {
        return `(${this.x},${this.y})`;
    }
}

console.log(point.toString());

// toLocaleString() 本地化字符串表示；
/* 
    toLocaleString() 对于Date Number 对象而言，定义了自己的方法，尝试使用本地惯例格式化数值，日期和时间
*/
point = {
    x: 1000,
    y: 2000,
    toString: function () {
        return `(${this.x},${this.y})`;
    },
    toLocaleString: function () {
        return `${this.x.toLocaleString()},${this.y.toLocaleString()}`;
    }
}
console.log(point.toLocaleString());

// valueOf方法；
point = {
    x: 3,
    y: 4,
    valueOf: function () {
        return Math.hypot(this.x, this.y);
    }
}
Number(point);
console.log(point > 5);

// toJSON方法
point = {
    x: 1,
    y: 2,
    toString: function () {
        return `(${this.x},${this.y})`;
    },
    toJSON: function () {
        return this.toString();
    }
}


console.log(JSON.stringify(point));

/**
 * 对象字面量扩展语法：
 * 
 */

// 1.简写属性
let x = 1, y = 2;
o = { x, y };   // 替换了 o ={x:x,y:y};
console.log(o.x + o.y);

// 计算的属性名
// 我们在创建特定属性对象的时候，必须先创建对象，然后在往对象里面塞值；类似于这样
const PROPERTY_NAME = "P1";
function computePropertyName() { return "p" + 2; }

o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;

//而现在我们可以这么做；
//这种方式可以用于解耦硬编码的问题，
p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
}

console.log(p.P1 + p.p2);

/**
 * 符号作为属性名：
 */

const extension = Symbol["my extension symbol"];
o = {
    [extension]: { "a": 1, "b": 2, "x": 1 }
}
o[extension].x = 0;
// 因为符号的唯一性，所以我们可以使用符号作为属性名，这样不会和原有的属性冲突；
console.log(o[extension].x);

// 扩展操作符；
let position = { x: 0, y: 0 };
let dimension = { width: 0, height: 0 };
let rect = { ...position, ...dimension };   //将属性都塞到rect里面，然后后面的属性如果与前面的相同，会覆盖前面的
console.log(rect.x, rect.y, rect.width, rect.height);

// 简写方法
squarre = {
    area: function () { return this.side * this.side },
    areas() { return this.side * this.side },   //简写方法。省略function参数
    side: 10
}

console.log(squarre.area());
console.log(squarre.areas());

// 这里还可以变种为；
const METHOD_NAME = "M";
const symbol = Symbol();

let weirdMethods = {
    "method with Space"(x) { return x + 1; },
    [METHOD_NAME](x) { return x + 1; },
    [symbol](x) { return x + 1; }
}
console.log(weirdMethods["method with Space"](1));
console.log(weirdMethods[METHOD_NAME](2));
console.log(weirdMethods[symbol](3));

// 属性的获取方法和设置方法； setter / getter
// 注意 set get 方法 中间有空格， 访问这个是设置r属性的只，而不是设置r方法的只，使用p.r 获取属性值，不是通过 p.r()获取属性值；
p = {
    x: 1.0,
    y: 2.0,
    get r() { return Math.hypot(this.x, this.y); },
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue / oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },

    get theta() { return Math.atan2(this.x, this.y); }
}

console.log(p.r);
console.log(p.theta);

const serianum = {
    _n: 0,
    get next() { return this._n++; },
    set next(newvalue) {
        if (newvalue > this._n) {
            this._n = newvalue;
        } else {
            throw new Error("large value!");
        }
    }
}

serianum.next = 10;
console.log(serianum.next);
console.log(serianum.next);

const random = {
    get octet() { return Math.floor(Math.random() * 256); },
    get uint16() { return Math.floor(Math.random() * 65536); },
    get int16() { return Math.floor(Math.random() * 65536) - 32768; }
}









