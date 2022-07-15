let x = 120;
var z = 30

function createFunction1() {
    function y() {
        if (x % 2 && x != 0) {
            return x * z;
        }
        else {
            return Math.random();
        }
    }
    return y;
}

function createFunction2() {
    x = 30;
    function f() {
        return x; 
    }
    return f;
}

let f1 = createFunction1();
console.log(f1());          
let f2 = createFunction2();
console.log(f2());          