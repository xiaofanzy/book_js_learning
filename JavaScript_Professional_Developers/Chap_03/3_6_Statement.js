// for 语句
let count = 10;
for (let i = 0; i < count; i++) {
  //console.log(i);
}

//for in 枚举对象中非符号键属性
let fruits = ["foo", "bar", "awz"];
for (let fruit in fruits) {
  //console.log(fruit);
}

let person = { name: "Tom", value: "Jake" };
for (let p in person) {
  //console.log(p + " " + person[p]);
}

// for of语句 遍历迭代对象的元素
for (const i of [2, 3, 4, 5, 6]) {
  //console.log(i);
}

// 标签语句 gpt说可以指定跳出,类似于c 里面的goto
