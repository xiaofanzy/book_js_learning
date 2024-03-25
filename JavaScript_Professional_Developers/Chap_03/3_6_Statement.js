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
start: for (let i = 0; i < count; i++) {
  console.log(i);
}

// break, continue
let num = 0;
for (let i = 0; i < 10; i++) {
  if (i % 5 == 0) {
    continue;
  }
}

// break 跳出循环到当前循环
outermost: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    break outermost;
  }
  num++;
}
console.log(num);

outmosts: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outmosts;
    }
  }
}

// 这个就相当于
let qs = location.search.substring();
with (location) {
  let qs = search.substring();
  let hostName = hostName;
  let url = href;
}
