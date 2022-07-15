function adder(added){
    return function(num){
        return num + added;
    };
}

var output = adder(5)(3);
console.log(output);

const add3 = adder(3);
output = add3(2);
console.log(output);