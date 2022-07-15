var cartoons = [{id: 1, bookType: 'cartoon', title: '식객', subtitle: '쌀밥', publish: 2003},
{id: 2, bookType: 'cartoon', title: '식객', subtitle: '귀리', publish: 2005},
{id: 3, bookType: 'cartoon', title: '식객', subtitle: '보리', publish: 2003}];

var findSubtitle = function(cartoon){
    return cartoon.subtitle;
};
var subtitles = cartoons.map(findSubtitle);

console.log(subtitles);