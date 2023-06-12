public class test {
    public static void main(String[] args) {
        String expression = "Hello World!";

        // 创建新的字符串
        String result = evaluate(expression);
        System.out.println(result); // 输出:Hello World!

        // 执行字符串连接操作
        StringBuffer str = new StringBuffer("Hello");
        str.append("World!");
        result = str.toString();
        System.out.println(result); // 输出:Hello World!

        // 使用运算符和函数进行字符串操作
        expression = "Hello " + "World!";
        result = evaluate(expression);
        System.out.println(result); // 输出:Hello World!

        expression = "Hello " + expression + "!";
        result = evaluate(expression);
        System.out.println(result); // 输出:Hello Hello World!

    }

    private static String evaluate(String expression) {
        return null;
    }
}