var cartoons = [{id: 1, bookType: 'cartoon', title: '식객', subtitle: '쌀밥', reviewscore: 9.89, publish: 2003},
{id: 2, bookType: 'cartoon', title: '식객', subtitle: '귀리', reviewscore: 9.09, publish: 2005},
{id: 3, bookType: 'cartoon', title: '식객', subtitle: '보리', reviewscore: 9.69, publish: 2003}];

var scoreReduce = function(sum, cartoon){
    return sum + cartoon.reviewscore;
};
var initialValue = 0
var cartoonsAvgscore = cartoons.reduce(scoreReduce, initialValue) / cartoons.length;
console.log(cartoonsAvgscore);