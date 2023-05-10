/* 创建字面量的两种方式 */
let person = new Object();
person.name = "Nicos";
person.age = 29;
//console.log(person);

// 对象字面量方法
person = {  // {} 代表的是 表达式上下文；
    name: "Nicos",
    age: 29,
    5: true // 可以是字符串，数字  数值属性会自动转换为字符串
};

console.log(person[name]);
console.log(person.name);

// 变种
let propertyName = "name";
console.log(person[propertyName]);

function displayInfo(args) {
    let output = "";

    if (typeof args.name == "string") {
        output = "name: " + args.name + "\n";
    }

    if (typeof args.age == "number") {
        output = "Args : " + args.age + "\n";
    }

    console.log(output);
}

displayInfo({
    name: "zhangsan",
    age: 55
})

displayInfo({
    name: "Greg"
})




