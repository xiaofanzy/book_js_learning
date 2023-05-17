let strname = "string name";
let sysname = Symbol("propname");
typeof strname === "string"
typeof sysname === "string"

let o = {};
//符号可以作为属性值
o[strname] = 1;
o[sysname] = 2;
console.log(o[strname]);
console.log(o[sysname]);

let s = Symbol("propname");
console.log(s.toString());
console.log(s.toString());

s = Symbol.for("shared");
let t = Symbol.for("shared");
console.log(s.toString);
console.log(s === t);
console.log(Symbol.keyFor(t));

