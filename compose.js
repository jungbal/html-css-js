function getOnlyMales(data){
    return data.filter(function(d){
        return d.gender === 'male';
    });
}

function getOnlyAges(data){
    return data.map(function(d){
        return d.age;
    });
}

function getAverage(data){
    let sum = data.reduce(function(acc, cur){
        return acc + cur;
    }, 0);
    return sum / data.length;
}

function compose(...funcArgs){
    return function(data){
        let result = data;
        for(let i = 0; i < funcArgs.length; i++){
            result = funcArgs[i](result);
        }
        return result;
    };
}

const getAverageAgeOfMale = compose(
    getOnlyMales,
    getOnlyAges,
    getAverage
);

let result = getAverageAgeOfMale(data);
console.log(result);