/* 
    js的类型： 1. 原始类型 2.对象类型

    1.原始类型： 数值，文本字符串、布尔值；
        特殊值： null
                undefined
                Symbool
    2. 对象类型：任何不属于原始类型的都是对象；对象是属性的集合；
                每个属性都有一个名字和一个值；
                特殊对象：全局对象；
        数组：一个命名值的无序集合，
        Set\Map\RegExp\Date 
    3. 
        1- 对象类型是可以修改的，原始类型是不可以修改的，
            数值、布尔值、符号、null和undefined、字符串都不可以修改的；

        - 可以自用转换不同类型的值；数值可以转换为字符串；
        - 常量const和变量let 

*/

//不可修改的原始值和可修改的对象应用
// 作为原始值，一律都是不可修改的，string的修改只是复制了一份副本；
let s = "Hello";
s.toUpperCase();
console.log(s);

//原始值是按照值比较的，而引用值是通过底层对象比较的；
let o = { x: 1 };
o.x = 2;
o.y = 3;    // add a parameter

p = { x: 1, y: 3 };
console.log(p == o);    //false

//而当底层相同的时候才可以说值是相同的；
let a = [];
let b = a;
console.assert(a === b);    //true

a = ["a", "b", "c"];
b = [];
for (let i = 0; i < a.length; i++) {
    b[i] = a[i];
}
//浅复制
let c = Array.from(b);

// 比较函数
function equalsArray(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}


// 类型转换
let n = 1 - "x";
console.log(n); //NaN




