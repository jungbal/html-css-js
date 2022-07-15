var cartoons = [{id: 1, bookType: 'cartoon', title: '식객', subtitle: '쌀밥', publish: '2003'},
{id: 2, bookType: 'cartoon', title: '식객', subtitle: '귀리', publish: '2005'},
{id: 3, bookType: 'cartoon', title: '식객', subtitle: '보리', publish: '2003'}];

var isPublish2003 = function(cartoon){
    var fullYear = new Date(cartoon.publish).getFullYear()
    return fullYear === 2003;
};
var publishCartoon = cartoons.filter(isPublish2003);

console.log(publishCartoon);