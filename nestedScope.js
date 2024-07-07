var x = 25;

function test() {
    var x = 13;

    function nestedTest() {
        var y = 23;
        console.log(y);
    }
    // console.log(y)
    nestedTest();
}
test();