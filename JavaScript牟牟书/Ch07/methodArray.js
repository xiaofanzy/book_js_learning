/**
 * 数组方法
 */

//  数组迭代器方法；
//  foreach() 数组元素的值，数组元素的索引，数组本身
// foreach  没有提前终止迭代的方式，没有brak 的机制；
//  如果只关心数组元素本身的值，那么可以将函数写成只接受一个参数，忽略其他参数的方式；
let data = [1, 2, 3, 4, 5];
let sum = 0;
data.forEach(value => sum += value);
console.log(sum);
// forEach 函数接受三个参数 ，value ,index array
data.forEach(function (v, i, a) {
    a[i] = v * 2;
})
console.log(data);

// map 方法 将形成的数组返回指定的数组 返回新的数组，不修改原有数组
a = [1, 2, 3];
b = a.map(x => x * x);
console.log(b);

// filter 方法 将形成的数组返回过滤后的新数组
a = [1, 2, 3, 4, 5];
b = a.filter(x => x > 2);
console.log(b);
console.log(a);
// 如果箱清理空隙，跳过缺失的元素
let dence = a.filter(() => true);
console.log(dence);
// 如果更一步，需要清理 undefined 和 null 值 的数据，可以这么做
dence = a.filter(x => x !== undefined && x !== null);

// find() 和 findIndex() 方法 查找到第一个符合条件的返回； find 返回元素， findeIdnex 返回索引
a = [1, 2, 3, 4, 5];
b = a.find(x => x > 2);
c = a.findIndex(x => x > 2);
console.log(b, c);

// every() 和 some() 方法 断言，所有元素都符合条件，返回true或者false；
a = [1, 2, 3, 4, 5];
b = a.every(x => x > 2);  // every 是全部，有假即为假
c = a.some(x => x > 2); // some 是存在，有即为真
console.log(b, c);

// reduce() 方法 将数组元素的值，数组元素的索引，数组本身，返回一个新的值;
a = [1, 2, 3, 4, 5];
a.reduce((x, y) => x + y, 0); // 第二个参数可选，0 代表参数的初始值； 如果没有第二个参数，则传入的第一个为初始值

// reduceRight() 方法 从右往左逆顺序执行reduce方法；
console.log(a.reduceRight((x, y) => Math.pow(x, y)));
console.log(a.reduce((x, y) => Math.pow(x, y)));

// flat 打平数组 打平一级
b = [1, [[2]]].flat();
console.log(b);

// flatMap 打平数组 打平多级
let phrases = ['hello', 'world', "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(' '));
console.log(words); //[ 'hello', 'world', 'the', 'definitive', 'guide' ]

// concat 添加数组
//  concat() 方法 添加数组，返回新的数组 不会递归打平数组，不修改调用数组
a = [1, 2, 3, [4, 5, [6]]];
b = [];
c = b.concat(a.flatMap(x => x));
console.log(c); // 推荐使用 push 或者 splice 修改数组，不要创建新数组了

// 通过 push pop shift unshift 实现栈和队列操作；
// pop push 采用先进后出法
let stack = [];
stack.push(1, 2);
stack.pop();
console.log(stack);

// 对于数组打平操作，可以使用扩展符操作；
value = [1, [2, 3]];
stack.push(...value);
console.log(stack);

// shift 删除首元素位置，空出空间，返回删除的元素;
// unshift 将所有元素往更高位置推一个，空出元素让推入元素占据第一个元素位置；
value = [1, [2, 3]];
value.shift(1);
console.log(value);

//slice() 方法 截取数组，返回新的数组
a = [1, 2, 3, 4, 5];
console.log(a.slice(1, 3));  //（a,b) 负数代表倒叙

// splice() 方法 截取数组，返回新的数组 (a,b) a 代表起始位，b 代表截取长度 第二个参数不带代表截取起始位到末尾
a = [1, 2, 3, 4, 5];
console.log(a.splice(4)); // [a)  
console.log(a.splice(1, 2));
console.log(a); // 整改

// fill 填充
let a = new Array();
a.fill(0);
a.fill(9, -1);
a.fill(8, 2, -1); // 填充什么，从什么索引开始，-1 代表终止索引；

// 数组索引和排序方法
// indexOf() 和 lastIndexOf(); 
a = [0, 1, 2, 1, 0];
a.indexOf(1); // 1
a.lastIndexOf(1); // 4

function findAll(a, x) {
    let results = [],
        len = a.length;
    pos = 0;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos > -1) {
            break;
        }
        results.push(pos);
        pos++;
    }

    return results;
}

// include 可以测试NaN,indexOf 无法测试
a = [NaN, NaN, NaN];
console.log(a.indexOf(NaN));
console.log(a.includes(NaN));













