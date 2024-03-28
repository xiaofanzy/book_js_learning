/**
 * Weapmap
 */

const wm = new WeakMap();
const key1 = { id: 1 },
  key2 = { id: 2 },
  key3 = { id: 3 };

const wm1 = new WeakMap([
  [key1, "value1"],
  [key2, "value2"],
  [key3, "value3"],
]);

// 当一个接无效就会错误,导致初始化失败;
const wm2 = new WeakMap([
  [key1, "value1"],
  //["BadKey", "value2"],
  [key3, "value3"],
]);

typeof wm2; //Invalid value used as weak map key

// 原始值也可以包装成对象再用键
const stringKey = new String("key");
const wm3 = new WeakMap([[stringKey, "value"]]);

console.log(wm3.get(stringKey));
// 删除的方式和map 差不多 ,也可以链式调用
// 当键存在,就不会被当作垃圾回收,如果键值对不存在,就会触发垃圾回收
wm.set({}, "val"); // 这里的键是个对象,但是没有引用该对象,所以执行完成就会被垃圾回收
//wm.set(1, "val"); // 这里的1 是原始类型,原始类型不会被触发垃圾回收;
// 但是当key存在的时候
const container = { key: {} };
wm.set(container.key, "val");
// 这里的key 就有一个引用,所以不会被垃圾回收

// 使用
// 1. 私有变量
// 私有变量会以存储在弱映射中的对象实例为键,以私有成员字典为值;
class User {
  constructor(id) {
    this.idProperty = Symbol("id");
    this.setId(id);
  }

  setPrivate(property, value) {
    const privateMembers = wm.get(this) || {};
    privateMembers[property] = value;
    wm.set(this, privateMembers);
  }

  getPrivate(property) {
    return wm.get(this)[property];
  }

  setId(id) {
    this.setPrivate(this.idProperty, id);
  }

  getId() {
    return this.getPrivate(this.idProperty);
  }
}

const user = new User(123);
console.log(user.getId());
user.setId(456);
console.log(user.getId()); // 456

// 我不是很明白,wm.get(user) 怎么获取到 user 的私有成员的.
wm.get(user)[user.idProperty];

const User1 = () => {
  const wms = new WeakMap();

  class User1 {
    constructor(id) {
      this.idProperty = Symbol("id");
      this.setId(id);
    }

    setPrivate(property, value) {
      const privateMembers = wms.get(this) || {};
      privateMembers[property] = value;
      wms.set(this, privateMembers);
    }

    getPrivate() {
      return wm.get(this)[property];
    }

    setId(id) {
      this.getPrivate(this.idProperty, id);
    }

    getId() {
      return this.getPrivate(this.idProperty);
    }
  }

  return User1;
};

// DOM节点元数据
const wm4 = new WeakMap();
const loginButton = document.querySelector("#login");
// 当键值对不存在，就会触发垃圾回收
wm4.set(loginButton, { disable: true });
