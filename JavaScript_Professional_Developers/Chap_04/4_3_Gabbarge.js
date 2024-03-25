/**
 * 4.3 垃圾清理
 */

// 标记清理
/**
 * 进入上下文的时候,会增加标记,当变量离开上下文的时候,就会加上离开上下纹的标记
 * 1. 添加标记的方式有很多种,当进入上下文的时候,翻转某一位;
 * 2/ 或者可以维护一个in 上下文 和 out上下文的变量列表,可以把变量从一个列表转移到另外一个列表中去
 */

// 引用计数
// 循环引用的方式无法处理

// 内存管理

//1解除引用
function createPerson(name) {
  let localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}

let globalPerson = createPerson("nico");
// 解除对globalPerson的引用
// 对于 localPerson而言,不需要解除引用,因为临时变量在调用之后会解除,但是
// 对于显示声明的变量而言,急需要解除引用,设置为null;
globalPerson = null;

//1. 使用const let 提升性能;
//2.隐藏类和删除操作,这玩意对于性能要求异常注重的时候很重要;
function Artical() {
  this.title = "inauguration Ceme";
}

// 这俩共享了隐藏类
let a1 = new Artical();
let a2 = new Artical();

// 当 下面的时候,因为俩不一样了,所以就不共享一个类了
a2.author = "jake";

// 当两个方式的时候,对于性能要求因为是不同的对象,所以无法共享类;
// 所以我们可以取巧操作;
function Articals(out_author) {
  this.title = "Band";
  this.author = out_author;
}

// 这样两个都可以使用了.也是共享类了
a3 = new Articals();
a4 = new Articals("Jake");

// 但是当使用delete 的时候,虽然是同一个构造函数,但是不再共享一个隐藏类;
// 此时 a3 a4 不是共享同一个隐藏类了;
delete a3.title;
// 我们可以使用吧不要的属性设置为null的方式,这样保持了隐藏类的不便和继续共享,同时也达到了删除引用值垃圾回收程序回收的效果
a3.title = null;

// 内存泄漏
let outer = function () {
  let name = "jake";
  return function () {
    return name; //会造成内存泄漏
  };
};

//静态资源分配和对象池,本质上其实就是减少内存回收的次数,
//example:
function addVector(a, b) {
  let resultant = new Vector();
  resultant.x = a.x + b.x;
  resultant.y = a.y + b.y;
  return resultant;
}
// 如果频繁调佣金就会导致垃圾回收次数过多,因为每次调用都会创建一个临时对象,所以我可以这样做
// 不要动态的创建矢量
function addVector(a, b, resultant) {
  resultant.x = a.x + b.x;
  resultant.y = a.y + b.y;
  return resultant;
}
