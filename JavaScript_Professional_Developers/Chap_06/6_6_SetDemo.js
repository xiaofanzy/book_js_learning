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
