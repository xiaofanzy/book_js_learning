// 数组的创建
let color = new Array();
color = new Array(20);  //长度20
color = new Array("Red", "blue", "Green");
// 当参数只有一个的时候，是数值的情况下则是该数值长度的数组，如果是字符串，则创建一个长度的数组，数据里就是这个字符串

//可以省略 new关键字
color = Array();

// 数组字面量
color = ["red", "blue", "green"];

// Array.from 可以将数组打平下一层；
console.log(Array.from("Matt"));

const m = new Map().set(1, 2).set(3, 4);
const n = new Set().add(1).add(2).add(3).add(4);

console.log(Array.from(m)); //// [[1, 2], [3, 4]]
console.log(Array.from(n));  // [1, 2, 3, 4]

//数据浅复制
const a1 = [1, 2, 3, 4]
const a2 = Array.from(a1);  //此时 a1 != a2但是这俩数据是相同的；

const iter = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
}

console.log(Array.from(iter));


// arguement对象可以轻松转换为数组
function getArgsArray() {
    return Array.from(arguments);
}

console.log(getArgsArray(1, 2, 3, 4));

/* 数组索引 */
color = ["red", "blue", "green"];
// alert(color[0]);
color[2] = "black";
color[3] = "brown";
// length 属性>=0
color.length;
// 可以通过length属性删除元素
color.length = 1;
// alert(color[1]);
// 可以通过末尾添加元素的方式
color[color.length] = "bb";

console.log(color instanceof Array);    //true

/* 迭代器方法 */
const a = ["foo", "bar", "baz", "qux"];
//数组索引
const keys = Array.from(a.keys());
console.log(keys);
// 数组元素
const aValues = Array.from(a.values);
console.log(aValues);
// 键值对
const aEntries = Array.from(a.entries());
console.log(aEntries);

// 拆分键值对
for (const [idx, element] of a.entries()) {
    console.log(idx);
    console.log(element);
}

/* 复制和填充方法 */
const zeros = [0, 0, 0, 0, 0];
zeros.fill(5);
console.log(zeros);
zeros.fill(3, 1, 4);
console.log(zeros);
//fill 对于超出部分，会相反索引。
zeros.fill(4, 3, 10);
console.log(zeros);

// let ints,
//     reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reset();

// ints.reset(5);


/* 转换方法 */
color = ["red", "blue", "green"];
//所有方法都有toString\toLocalString\valueof方法
console.log(color.toString());
console.log(color.valueOf());
console.log(color);

let person1 = {
    toLocalString() {
        return "Nikolaos";
    },

    toString() {
        return "Nicolas";
    }

}

let person2 = {
    toLocalString() {
        return "Grigorios";
    },
    toString() {
        return "Greg";
    }
}
let person = [person1, person2];
console.log(person.toString());

color = ["red", "green", "blue"];
//通过分割线
console.log(color.join("||"));










