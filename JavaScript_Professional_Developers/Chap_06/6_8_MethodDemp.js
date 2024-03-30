/**
 * - array
 * - 所有定性数组
 * - Map
 * - Set
 */

// 上面的所有类型都支持顺序迭代
let iterableThings = [
  Array.of(1, 2),
  (typedArr = Int16Array.of(3, 4)),
  new Map([
    [5, 6],
    [7, 8],
  ]),
  new Set([9, 10]),
];

for (let vars of iterableThings) {
  for (let val of vars) {
    console.log(val);
  }
}

// 如果不需要深复制,只是浅复制的话,那么使用语法就行
let arrShallow = [1, 2, 3];
let arr2Shallow = [...arrShallow];
console.log(...arr2Shallow);
console.log(arr2Shallow == arrShallow);

//
let map1 = new Map([
  [1, 2],
  [3, 4],
]);
let map2 = new Map(map1);
console.log(...map2);

let arrConstructor = [1, 2, 3];
let arrConstructor2 = [1, ...arrConstructor, 4, 5];
console.log(arrConstructor2);

// 浅复制意味着只会复制对象引用
let arr3Shallow = [{}];
let arr4Shallow = [...arr3Shallow];
arr4Shallow[0].foo = "bar";
console.log(arr3Shallow[0].foo);

// 使用操作符复制;
let arr1 = [1, 2, 3];

// 数组复制到定性数组
let typearr1 = Int16Array.of(...arr1);
let typearr2 = Int16Array.from(arr1);
console.log(typearr1);
console.log(typearr2);

//数组复制到map
let mapcopy = new Map(arr1.map((x) => [x, "val" + x]));
console.log(mapcopy);

//数组复制到set
let set = new Set(arr1);
console.log(set);

// 集合到数组
let arr2 = [...set];
console.log(arr2);
