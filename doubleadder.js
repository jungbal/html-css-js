function double(num){
    return num * 2;
}

function doubleAdder(added, func){
    const doubled = func(added);
    return function(num){
        return num + doubled;
    };
}

doubleAdder(5, double)(3);

const addTwice3 = doubleAdder(3, double);
addTwice3(2);
