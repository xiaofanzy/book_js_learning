/* 7.1 理解迭代 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//不理想情况
/**
 * 两个方面，第一个 迭代之前需要事先知道如何使用数据结构，但是不是所有都适用
 *          第二个 遍历顺序并不是数据结构固有的。通过递增索引来访问数据是特定于数组类型的方式，并不适用于其他具有隐式顺序的数据结构
 */
let collection = ['foo', 'bar', 'baz'];
for (let index = 0; index < collection.length; ++index) {
    console.log(collection[index]);
}

//使用Array.property.foreach方法；
collection.forEach((item) => console.log(item));

/**
 * 迭代器模式
 *
 * 支持迭代的自我识别能力和创建实现iterator接口的能力；
 */

// 对象内置Iterator接口： 字符串、数组、映射、集合、arguement NodeList等DOM集合模型
let num = 1;
let obj = {};

// 检查是否否存在默认迭代器属性，使用Symbol.iterator 这个函数即可
console.log(num[Symbol.iterator]);
console.log(obj[Symbol.iterator]);

//这些都生成了迭代器工厂
let str = 'abc';
let arr = ['a', 'b', 'v'];
let map = new Map().set('a', '1').set('b', '2').set('c', '3');
let set = new Set().add('a').add('b').add('c');
let els = document.querySelectorAll('div');

// 这些含有迭代器参数，调用工厂函数可以生成一个迭代器对象
console.log(str[Symbol.iterator]);
console.log(arr[Symbol.iterator]());

arr = ['foo', 'bar', 'baz'];

//for of 循环
for (const el of arr) {
    console.log(el);
}

// 数组解构
let [a, b, c] = arr;
console.log(a, b, c);

//扩展运算符
console.log(...arr);

//Array.from
let arr3 = Array.from(arr);
console.log(arr3);

// set构造函数
let set1 = new Set(arr);
console.log(set1);
console.log("--------------------");
// Map构造函数
let pairs = arr.map((x, i) => [x, i]);
console.log(pairs);
console.log("--------------------");
let map1 = new Map(pairs);
console.log(map1);
console.log("--------------------");
//继承
class FooArray extends Array { }
let fooArr = new FooArray('foo', 'bar', 'baz');
for (const el of fooArr) {
    console.log(el);
}

/**
 * 7.2.3 迭代器协议
 * 迭代器是一种一次性使用的独享，用于迭代和关联可迭代对象，使用next方法遍历数据，每次层共调用next，返回一个IteratroResult对象
 * 其中包含迭代器返回的下一个值，
 * next 犯法返回的迭代器对象包含两个属性，done 和value done 是一个布尔值，表示是否再次调用next的下一个值；
 * value表示下一个值，或者undefined ,这种undefined代表资源已被耗尽；
 */
arr = ['foo', 'bar'];
console.log(arr[Symbol.iterator]);
let iter = arr[Symbol.iterator]();
console.log(iter);

//执行迭代
console.log(iter.next()); console.log(iter.next()); console.log(iter.next());

console.log("--------------------");
// 迭代器并不予可迭代对象的某个快照绑定，当目标函数修改之后，迭代器可以反映相应的变化；
arr = ['arr', 'baz'];
iter = arr[Symbol.iterator]();
console.log(iter.next());

//自定义实现迭代器接口的迭代器对象；
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: false, value: 'foo' };
            }
        }
    }
}

let f = new Foo();
console.log(f[Symbol.iterator]());

class Counter {
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }

    next() {
        if (this.count <= this.limit) {
            return { done: false, value: this.count++ };
        } else {
            return { done: true, value: undefined };
        }
    }

    [Symbol.iterator]() {
        return this;
    }

}

let counter = new Counter(3);
for (const i of counter) {
    console.log(i);
}

class Counter1 {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1, limit = this.limit;

        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
}


counter = new Counter(3);
for (const i of counter) {
    console.log(i);
}

class Counter2 {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1, limit = this.limit;

        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true };
                }
            },
            return() {
                console.log("Exiting early!");
                return { done: true };
            }
        };
    }
}

let counter1 = new Counter(5);


for (let i = 0; i < counter1; i++) {
    if (i > 2) {
        break;
    }
    console.log(i);
}

//如果迭代器没有关闭，则可以继续执行
a = [1, 2, 3, 4, 5];
iter = a[Symbol.iterator]();
for (const i of iter) {
    console.log(i);
    if (i > 2) {
        break;
    }
}
console.log("-----------------");
for (const i of iter) {
    console.log(i);
}

//要知道某个迭代器是否可以关闭，可以测试这个迭代器实例return 属性是不是函数对象

