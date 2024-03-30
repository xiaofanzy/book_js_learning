/**
 * WeakSet
 */

const ws = new WeakSet();
// is like WeakMap，but it has no keys
const val1 = { id: 1 };
ws.add(val1).add(function () {});

console.log(ws.has(val1));

// if has invalid object,it will be wrong
// const ws2 = new WeakSet([val1, "bal"]); // Invalid value used as weak set key

// weak is when the object is not reference to him. it will be garbage collected
const ws2 = new WeakSet();
const container = {
  // container is referenct the val ,so it can't be garbage collected
  val: {},
};
ws2.add(container.val);

// it can remove the reference of container.so it can be trigger garbage
function removereference() {
  container.val = null;
}

// weatSet 可以使用打标签的作用
// 如果我们使用Set,不会触发垃圾回收,但是使用WeakSet，使用引用就可以打上标签
const disableElement = new Set();
const loginButton = document.querySelector(".login");
// 这里因为有内容,所以无法触发回收,即使是loginButton 被删除了
disableElement.add(loginButton);

// 如果我们使用WeakSet，会触发垃圾回收，即使是loginButton 被删除了
const ws3 = new WeakSet();
ws3.add(disableElement); // 可以在删除之后,也触发垃圾会说,回收垃圾;
