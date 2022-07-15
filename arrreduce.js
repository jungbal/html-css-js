function joinName(resultStr, user){
    resultStr = resultStr + user.name + ', ';
}

var users = [{name: 'jung', age: 24}, {name: 'gab', age: 8}, {name: 'lee', age: 24}];

users.reduce(joinName, '');

console.log(users)