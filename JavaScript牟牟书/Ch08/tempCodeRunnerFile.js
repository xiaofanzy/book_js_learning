let o = {
    // 方法， 这里this 指向的是调用它的对象o
    m: function () {
        let self = this;
        console.log(this === o);;
        f();

        // 这里是当作函数使用，this 指向的就是全局变量或者是undefined;
        function f() {
            console.log(this === o);
            console.log(self === o);    //我们通过使用this == self 做了一次桥接，然后获取到指向o的this 值
        }
        console.log("===============");

        const f1 = () => { console.log(this === 0); };
    }
}
o.m().f1();