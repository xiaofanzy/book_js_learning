/**
 * 理解迭代
 */

// 迭代: 对有序集合按照顺序便利;
let collection = ["a", "b", "c"];

for (let item of collection) {
  console.log(item);
}

for (let index = 0; index < collection.length; index++) {
  console.log(collection[index]);
}

// 升级版本
collection.forEach((item) => console.log(item));
