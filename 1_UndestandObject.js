/**
 * 理解对象
 */
let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function () {
  console.log(this.name);
};

// 对象字面量
let person1 = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName: function () {
    console.log(this.name);
  },
};

// 属性的类型： 数据属性和访问器属性
// 1. 数据属性
// [[configurable]]  是否可配置（可配置的属性，可以通过delete删除）
// [[enumerable]]  是否可枚举（可枚举的属性，可以通过for...in循环遍历）
// [[value]]  属性的值
// [[writable]]  是否可写
// 当一个属性被赋值的时候，其余的都会是true,而value 是该赋予的值；

// 如果需要修改属性，需要使用object.defineProperty方法
let person2 = {};
Object.defineProperty(person2, "name", {
  // 当configurable 为true 时，该属性可以被删除，当为false 的时候，无法删除
  configurable: false,
  writable: false,
  value: "Nicholas",
});

console.log(person2.name);
person2.name = "Greg";
console.log(person2.name);
delete person2.name;
console.log(person2.name);
// 如果已经设置了onfigurable: false,那么在严格模式下，再重新赋值就会报错
//Object.defineProperty 当不设置的时候，默认都是false/

//2. 访问器属性
/**
 * [[configurable]]  是否可配置（可配置的属性，可以通过delete删除）
 * [[enumerable]]  是否可枚举（可枚举的属性，可以通过for...in循环遍历）
 * [[get]]  获取属性值
 * [[set]]  设置属性值
 */
let book = {
  year_: 2017,
  edition: 1,
};

Object.defineProperty(book, "year", {
  get() {
    return this.year_;
  },
  set(value) {
    if (value > 2017) {
      this.year_ = value;
      this.edition += value - 2017;
    }
  },
});

book.year = 2018;
console.log(book.year);

let books = {};
Object.defineProperties(books, {
  year_: {
    value: 2017,
  },
  edition: {
    value: 1,
  },
  year: {
    get() {
      return this.year_;
    },
    set(value) {
      if (value > 2017) {
        this.year_ = value;
        this.edition += value - 2017;
      }
    },
  },
});

let descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get); // function
let descriptors = Object.getOwnPropertyDescriptors(book, "year");
console.log(descriptors.value);

// Object.getOwnPropertyDescriptors 静态方法，当调用的时候，会在一个新对象上面返回他们
Object.defineProperties(book, {
  year_: {
    value: 2017,
  },

  edition: {
    value: 1,
  },
  year: {
    get() {
      return this.year_;
    },
    set(value) {
      if (value > 2017) {
        this.year_ = value;
        this.edition += value - 2017;
      }
    },
  },
});
console.log(Object.getOwnPropertyDescriptors(book));

// 合并对象
