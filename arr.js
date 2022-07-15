var arr = [1, 2, 3, 4];
var output = arr.filter(num => num % 2 ===0);
console.log(output);

const isLteFive = function(str){
    return str.length <5;
}
arr = ['hello', 'code', 'states', 'happy', 'hacking'];

var output = arr.filter(isLteFive);
console.log(output);