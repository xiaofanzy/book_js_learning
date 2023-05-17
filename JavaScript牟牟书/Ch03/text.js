/**
 * js中表示文本的是string ,他是一个不可修改的有序序列；
 * js字符串基于0的索引，所以第一个16位值的索引是0，第二个值是1；
 * 空字符串就是长度为0的字符串；
 */

let r = `do you love 
me`;
console.log(r);

let msg = "hello" + "wrold";
let name = "tom";
let greeting = "Welcome to my blog." + " " + name;
console.log(greeting);

//长度
console.log(greeting.length);

/**
 * js属性
 */
let s = "Hello world";
//获取一部分
s.substring(1, 4);
s.slice(1, 4);
s.slice(-3); //截取最后三位
s.split(",");   //通过指定字符分割；

// 搜索字符串
s.indexOf("l");
s.indexOf("l", 3);   //第二位是起始位；
s.indexOf("lll");   // -1 表示不包含
s.lastIndexOf("l"); //最后一次的位置；

// 布尔值搜索函数
s.startsWith("Hello");
s.endsWith("!");
s.includes("or");

//创建床新版本；
s.replace("llo", "ya");
s.toLowerCase()
s.toUpperCase()
s.normalize("NFD"); //nfd归一化

// 访问个别字符
s.charAt(0);
s.charAt(s.length - 1);
s.charCodeAt(0);
s.codePointAt(0);

// 字符串填充
"x".padStart(3);
console.log("x".padEnd(3));
console.log("x".padStart(3, "*"));
console.log("x".padEnd(3, "-"));

// 删除空格键
"  test  ".trim();
"  test  ".trimStart();
"  test  ".trimEnd();

// 未分类字符串方法
s.concat("!");
"<>".repeat(5);

// 模板字面量
name = "bill";
greeting = `Hello ${name}`;
console.log(greeting);

console.log('\n'.length);   //1
console.log(String.raw`\n`.length); //2

//判断非空
if (name !== null) {
    console.log("name is not null");
}

