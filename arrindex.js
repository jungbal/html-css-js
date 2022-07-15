function makeadrBook(adrBook, user){
    var frstLetter = user.name[0];

    if(frstLetter in adrBook){
        adrBook[frstLetter].push(user);
    }else{
        adrBook[frstLetter] = [];
        adrBook[frstLetter].push(user);
    }

    return adrBook;
}

var users = [{name: 'jung', age: 24}, {name: 'gab', age: 8}, {name: 'lee', age: 24}];

users.reduce(makeadrBook, {});

console.log(makeadrBook);