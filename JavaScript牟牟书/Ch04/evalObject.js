/**
 * 1.eval 是函数还是操作符？
 *  eval是一个函数，其实是一个操作符；
 */

/**
 * eval 期待一个参数；
 * 当传入任何非字符串值，简单返回
 * 传入字符串，讲尝试解析，成功就返回最后一个表达式语句的值；
 * 失败就返回SyntaxError
 * 如果最后一个表达式或语句没有值就返回undefined;
 * 如果求值产生异常，则会从调用eval的地方传播出来；
 */

/**
 * 1. 如果定义局部变量， 则会获取这个局部变量的值；
 * 如果调用的表达式，则会声明一个新局部变量，而如果表达式的作用域在局部作用域内， 即let const声明的变量，不会定义到调用环境中，在声明结束就被销毁了；
 */

//eval("function f(){return x + 1; }");
//console.log(1, 2);

const geval = eval;
let x = "global", y = "global";


/**
 * 
 * 上下的这两种方式： 如果直接调用eval函数，则修改的是局部变量，
 * 如果是调用的方式是间接调用，则修改的是全局变量
 * 其实很好理解： 如果直接调用eval函数，则这个作用域就是在大括号内，往上查找最近的那就是作用域内的局部变量的值；
 * 如果是间接调用的方式，那么会调用顶部的geval，然后这时候离最近的就是全局变量的值了，那么修改的就是全局变量了；
 */
function f() {
    let x = "local";
    eval("x += 'change';");   //调用
    console.log(x); // 此时返回的x是localchange;而不是gloabl
    return x;
}


console.log(f(), x);    // 这里 x第二个是global ,第一个 返回 localchange 所以返回的是localchange global
// function g() {
//     let y = "local";    //定义局部变量
//     geval("y += change;");  //这里调用的是全局变量 globalchange global
//     return y;   // 返回饿了未修改的局部变量；
// }
// // g() 返回的是 local, y 返回的是 localchange; 所以一起就是local globalchange;
// console.log(g(), y); // 当将eval改成间接调用的时候，md这破玩意竟然突破作用域了，修改了全局变量的值； 

/**
 * 严格模式下的eval  ，严格模式下的eval函数，不允许定义新变量和函数，但是可以查询和设置局部变量；
 */




