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
book["name"];

