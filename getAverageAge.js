var data = [{gender: 'male', age: 24}, {gender: 'male', age: 25}, {gender: 'female', age: 27}, {gender: 'female', age: 22}, {gender: 'male', age: 29}];

function getAverageOfgender(data){
    var onlyMales = data.filter(function(d){
        return d.gender === 'male';
    });

    var numOfMales = onlyMales.length;

    var onlyMaleAges = onlyMales.map(function (d){
        return d.age;
    });

    var sumOfAges = onlyMaleAges.reduce(function (acc, cur){
        return acc + cur;
    }, 0);
    return sumOfAges / numOfMales;
}