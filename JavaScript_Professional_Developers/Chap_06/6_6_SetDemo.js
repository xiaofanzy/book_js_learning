/**
 * Set
 */

const s = new Set();
const s1 = new Set([1, 2, 3]);

// 使用自定义迭代器初始化集合
const s2 = new Set({
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
});
console.log(s2.size);

// 可以使用链式调用法
const s3 = new Set().add("val1");

// set 的值可以使用js的数据类型作为值
const functtionVal = function () {};
const symbolVal = Symbol();
const objectVal = {};

s.add(functtionVal).add(symbolVal).add(objectVal);
console.log(s.has(functtionVal)); // true
console.log(s.has(function () {})); // false

// 顺序和迭代
// set 按照顺序 可以支持顺序迭代
const s4 = new Set([1, 2, 3, 4, 5]);
console.log(s.values == s[Symbol.iterator]);
console.log(s.keys == s[Symbol.iterator]);

// 类似与 for(let val of s4)
for (let vals of s4[Symbol.iterator]()) {
  console.log(vals);
}

// you can also use ...
console.log(...s4);

// entries 会产生一个数组,key val 都是同一个值;这就是把set转换成数组
console.log([...s4.entries()]);

console.log(s4.forEach((key, val) => `${key} -> ${val}`));

// 和map一样,修改原始值,不会影响集合值本身,修改对象属性,则会影响对象
const s5 = new Set(["val1"]);
console.log("--------------");
for (let key of s5.values()) {
  key = "val2";
  console.log(key);
  console.log(s5.has(key));
  console.log(s5.has("val1"));
}

//修改对象的属性,不受影响
const valObj = { id: 1 };
const s6 = new Set([valObj]);
for (let value of s6.values()) {
  value.id = 2;
  console.log(value);
  console.log(s6.has(valObj));
}

console.log(valObj); // { id: 2 }

// 可扩展的set
class XSet extends Set {
  // 交集
  union(...sets) {
    return XSet.union(this, ...sets);
  }

  static union(a, ...bSets) {
    const unionSet = new XSet(a);
    for (const b of bSets) {
      for (const val of b) {
        unionSet.add(val);
      }
    }
    return unionSet;
  }

  // 并集
  intersection(...sets) {
    return XSet.intersection(this, ...sets);
  }

  static intersection(a, ...bSets) {
    const intersectionSet = new XSet();
    for (const b of bSets) {
      for (const val of b) {
        if (!a.has(val)) {
          intersectionSet.delete(val);
        }
      }
    }
    return intersectionSet;
  }

  difference(...sets) {
    return XSet.difference(this, ...sets);
  }

  static difference(a, ...bSets) {
    const differenceSet = new XSet(a);
    for (const b of bSets) {
      for (const val of b) {
        if (a.has(val)) {
          differenceSet.delete(val);
        }
      }
    }
    return differenceSet;
  }

  //返回两个集合的堆成差集
  symmertricDifference(...sets) {
    return XSet.symmertricDifference(this, ...sets);
  }

  static symmertricDifference(a, ...bSets) {
    return a.union(b).difference(a.intersection(b));
  }

  // 返回笛卡尔积
  static cartesianProduct(a, b) {
    const cartesianProductSet = new XSet();
    for (const aVal of a) {
      for (const bVal of b) {
        cartesianProductSet.add([aVal, bVal]);
      }
    }

    return cartesianProductSet;
  }

  static powerSet(a) {
    const powerSet = new XSet();
    for (const aVal of a) {
      powerSet.add([aVal]);
    }
    for (const aVal of a) {
      for (const bVal of powerSet) {
        powerSet.add(bVal.concat([aVal]));
      }
    }
    return powerSet;
  }
}
