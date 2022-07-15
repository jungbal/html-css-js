function getAverage(data){
    var sum = 0;
    for(var i = 0; i < data.length; i++){
        sum = sum + data[i];
    }
    return sum / data.length;
}

let output = getAverage([1, 2, 3]);
console.log(output);

output = getAverage([4, 2, 3, 6, 5, 4]);
console.log(output);