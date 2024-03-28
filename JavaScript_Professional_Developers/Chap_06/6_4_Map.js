/**
 * map
 */

const m = new Map();

// 实例化
// 嵌套数组
const m1 = new Map([["key1", "val1"]]);
// 自定义迭代器
const m2 = new Map({
  [Symbol.iterator]: function* () {
    yield ["key1", "value"];
  },
});

// set 添加键值对
m.set("firstName", "matt").set("lastname", "Frisbie");

console.log(m.get("firstName"));

// delete key and value
m.delete("firstName");

// clear all key and value
m.clear();

// set method can use chain invocation
m.set("firstName", "matt").set("lastname", "Frisbie");
m.has("fristname");
m.get("fristname");

// map  kye can use all type
//m = new Map();
const functionKey = function () {};
m.set(functionKey, "funcationvalue");
const symbolKey = Symbol();
m.set(symbolKey, "symbolvalue");
const objectKey = new Object();
m.set(objectKey, "objectvalue");

console.log(m.get(functionKey));

// don't undestand why the value or key is update and still same
const objKeys = {},
  objVal = {},
  arrKey = [],
  arrVal = [];
objKeys.foo = "foo";
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");
m.set(objKeys, objVal);
m.set(arrKey, arrVal);
console.log(m.get(objKeys));
console.log(m.get(arrKey));

const m3 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
]);
//console.log(...m3);

m3.forEach((key, val) => console.log(`${key} -> ${val}`));

// for of
for (let key of m3.keys()) {
  console.log(key);
}

// if key is origin type ,can't update it bute if the symbol is object ,can update it
const m4 = new Map([["key1", "val1"]]);
console.log("-------------------");
for (let key of m4.keys()) {
  key = "newKey";
  console.log(m4.get(key));
  console.log("-------------------");
  console.log(m4.get("key1"));
}

const keyObj = { id: 1 };
const m5 = new Map([[keyObj, "keyObjValue"]]);

for (let key of m5.keys()) {
  key.id = "new Key";
  console.log(m5.get(keyObj));
}
console.log(keyObj);

/**
 *  choose object or map;
 */

// 如果是固定大小的内存情况下,map
// 大量插入操作的情况下map 最佳
// 少量键值对的时候,object 更快,入股哦大量查找操作的情况下,可能object更好一点
// 删除毫无疑问选map
