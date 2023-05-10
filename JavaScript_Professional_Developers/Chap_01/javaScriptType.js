// 当引入外部脚本文件的时候，<script>内部的代码不会被执行</script>
<script scr="example.js"> {/* 包含外部文件 */}
    {/* 内嵌JavaScript代码 */}
    function sayHi() {
        console.log("Hi!")
        //不能出现</script> 否则会报错
        //console.log("</script>");
    }

</script >

