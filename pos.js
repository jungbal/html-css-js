var menus = document.querySelectorAll("button");

var btnAmericano = menus[0];
var btnCaffelatte = menus[1];

btnAmericano.onclick = handleClick;
btnCaffelatte.onclick = handleClick;

function handleClick(){
    var currentMenu = handleClick;
    console.log(currentMenu + "를 클릭하셨습니다.");
}