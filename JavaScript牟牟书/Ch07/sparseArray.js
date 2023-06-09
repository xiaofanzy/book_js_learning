/**
 * 稀疏数组: 就是0号元素为空值的数组，lenth的值大于元素个数
 */


let a = new Array(5);   //没有元素，但是a.length = 5;
a = [];
a[1000] = 1;

// 足够稀疏的数组通常比稠密数组慢，但是内存占用少的方式，查询这种数组的元素与查询对象的属性占用时间相当；
a = [,];    //这种就是length为1 ，但是没有元素
let a2 = [undefined];   //这种就是有一个元素，值是undefined;
console.log(0 in a);    //false
console.log(0 in a2);   //true

/**
 * 数组长度 Length
 */
[].length;    //0
[1, 2, 3].length;    //3

// 当设置数组长的时候，会将数组长度之外的数据删除
a = [1, 2, 3];
a.length = 1;
console.log(a); // 1

// push 尾添加
let a = [];
a.push(1);
a.push(2);
console.log(a.length); // 2

//通过 delete 可以删除元素，但是不删除length;
a = [1, 2, 3];
delete a[0];    //这种方式就是类似于将元素赋undefined值，
console.log(a.length); // 3

/**
 * 迭代数组
 */
let letters = [..."hello World"];
let string = "";
for (const letter of letters) {
    string += letter;
}
console.log(string);

let evnestring = "";
// 注意这里是 letters.entries()
for (const [index, string] of letters.entries()) {
    if (index % 2 === 0) continue;
    evnestring += string;
}
console.log(evnestring);

let uppercase = "";
letters.forEach(letter => uppercase += letter.toUpperCase());
console.log(uppercase);

/**
 * 对于性能参数，数据可以这么做，这样只读取了一次数组长度，而不是没出都读取
 * 
 */
//未修改前
let vowels = "";
for (let i = 0; i < letters.length; i++) {  //letters.length 这种方式，每次循环都需要查一下数组长度，
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
        vowels += letters[i];
    }
}

//修改后
for (let i = 0, len = letters.length; i < len; i++) {    // 这种修改len只用了一次，后面就len代替的length
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
        vowels += letters[i];
    }
}

// 从后向前迭代数组
for (let i = letters.length; i >= 0; i--) { //这种也是；只用了一次

    // 对于非稠密数组而言；当参数是undefined的时候，就回跳过；
    if (a[i] === undefined) continue;

    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
        vowels += letters[i];
    }
}

let table = new Array(10);
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}
//初始化
for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
        table[i][j] = i * j;
    }
}
console.log(table[5][7]);






