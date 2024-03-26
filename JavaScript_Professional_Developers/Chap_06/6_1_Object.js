/**
 * object
 */

// 1. 显式创建对象
let person = new Object();
person.name = "Nicholas";
person.age = 29;

// 2. 对象字面量
person = {
  name: "Nicholas",
  age: 29,
};

// 也可以使用对象字面量表示法创建对象,然后再为其添加属性和方法
person = {};
person.name = "Nicholas";
person.age = 29;

// 对象字面量表示法已经成为为函数传递大量可选参数的主要方式
function displayInfos(args) {
  let output = "";
  if (typeof args.name == "string") {
    // string 是原始类型的名称
    output += "Name: " + args.name + "\n";
  }
  if (typeof args.age == "number") {
    output += "Age: " + args.age + "\n";
  }
  console.log(output);
}

displayInfos({
  name: "Nicholas",
  age: 29,
});

displayInfos({
  name: "Greg",
});

// 读取属性一般用点表示法,也可以用方括号表示法
console.log(person.name);
console.log(person["name"]);

// 不过对于非法标识符名字,只能使用方括号表示法
person["first name"] = "Nicholas";
console.log(person["first name"]);
