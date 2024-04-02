/**
 * 迭代器模式:
 */

// 可迭代对象,就是实现了iterator接口的对象,元素有限,遍历顺序无歧义
let arr = [3, 1, 3];
// 或者可以链式调用
let arr1 = new Set().add(1).add(2).add(3);

// 任何实现iterator接口的对象都是可迭代对象,都可以被消费

/**
 * 1. 可迭代协议:
 * - 1. 支持迭代的自我识别能力
 * - 2. 创建实现iterator接口的对象的能力;
 */

// string [] map set arguments NodeList 等都实现了iterator接口
let num = 1;
let obj = {};
console.log(num[Symbol.iterator]);
console.log(obj[Symbol.iterator]);

let str = "abc";
let arrs = [1, 2, 3];
let map = new Map([
  [1, 2],
  [3, 4],
]);
let set = new Set().add(1).add(2).add(3);
//let els = document.querySelectorAll("div");

console.log(str[Symbol.iterator]);
console.log(arrs[Symbol.iterator]);
console.log(map[Symbol.iterator]);
console.log(set[Symbol.iterator]);
//console.log(els[Symbol.iterator]);

// 调用工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); //Object [String Iterator] {}

/**
 * 原生语言特性
 * 1. for -of 循环
 */
let arr2 = ["foo", "bar"];
for (let el of arr2) {
  console.log(el);
}

// 数组结构;
let [a, b, c] = arr2;
console.log(a, b, c);

//扩展操作符
let arr3 = [...arr2];
console.log(arr3);

// array.from() 复制
let arr4 = Array.from(arr2);
console.log(arr4);

// Set 构造函数
let sets = new Set(arr2);
console.log(sets);

// Map 构造函数
let paris = arr.map((k, v) => [k, v]);

// 如果原型链上得父类实现了iterator接口，那么子类也可以实现iterator
class FooArray extends Array {}
let fooArr = new FooArray("foo", "bar");
for (let el of fooArr) {
  console.log(el);
}

// iterator 协议
// 使用next 方法便利数据,每次调用返回下一个iteratorResult对象,
// iteratorResult对象有value和done两个属性value = next value, done = is end;
let arr5 = ["foo", "bar"];
console.log(arr[Symbol.iterator]);

// iterator
let iter = arr[Symbol.iterator]();
console.log(iter);

console.log(iter.next());

/**
 * 1. 当 done = true 得时候,next 返回的值是{ value: undefined, done: true }
 * 2. 迭代器得便利是一次有序便利,迭代器之间没有相互联系,只会独立得迭代对象
 * 3. 迭代器并不是快照绑定,仅仅是使用游标来便利可迭代对象得过程;
 */
arr.splice(1, 0, "foo");
console.log(arr[Symbol.iterator]().next());

class Foo {
  [Symbol.iterator]() {
    // 1. return obj
    return {
      // 2 这个obj 对象有next方法,这个方法呢,返回一个对象,对象有value和done两个属性
      next() {
        return {
          value: "foo",
          done: false,
        };
      },
    };
  }
}

let f = new Foo();
console.log(f[Symbol.iterator]().next());

// array iterator
let as = new Array();
console.log(as[Symbol.iterator]());

// 自定义迭代器
class Counter {
  constructor(lim) {
    this.count = 1;
    this.limit = lim;
  }

  next() {
    if (this.count < this.limit) {
      return { value: this.count++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }

  [Symbol.iterator]() {
    return this;
  }
}

let counter = new Counter(3);
let counter1 = new Counter(3);
console.log(counter.next());
console.log("-------------------");
console.log(counter1.next());
console.log(counter.next());
console.log(counter.next());

// 但是这个每次迭代都会创建一个count对象,所以我们可以吧创建对象得过程放到迭代器里面;
class Counter2 {
  constructor(lim) {
    this.limit = lim;
  }

  [Symbol.iterator]() {
    let count = 1;
    let limit = this.limit;
    return {
      next() {
        if (count < limit) {
          return { value: count++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}

// 迭代器也实现了iterator接口,所以可以用来便利;
let arr6 = ["foo", "bar"];
let iter1 = arr6[Symbol.iterator]();

for (let val of arr6) {
  console.log(val);
}
for (let v of iter1) {
  console.log(v);
}

// 提前终止迭代器
// braak,continue,return,throw
// 结构操作未消费所有值;
// 当发现有值可以迭代,但是没有迭代得时候,就会调用return 方法;
class Counter3 {
  constructor(lim) {
    this.limit = lim;
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count < limit) {
          return { value: count++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
      return() {
        console.log("Exactly early");
        return { done: true };
      },
    };
  }
}
let co = new Counter3(5);

for (let c of co) {
  if (c > 2) {
    break;
  }
  console.log(c);
}
// 注意,迭代器没有关闭,可以循环,但是非迭代器,比如co 就从头开始i执行
console.log(co[Symbol.iterator]().next());

let a1 = [1, 2, 3, 4, 5];
let iter3 = a1[Symbol.iterator]();
for (let i of iter3) {
  console.log(i);
  if (i > 1) {
    break;
  }
}

console.log(iter3.next());

// 我们可以对迭代器进行return属性得复制,这样调用得时候提前退出会调用return 方法了
let iter4 = a1[Symbol.iterator]();
iter4.return = function () {
  console.log("return called");
  return {
    done: true,
  };
};

for (let i of iter4) {
  if (i > 1) {
    break;
  }
  console.log(i);
}
