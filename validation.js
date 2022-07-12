var elInputUsername = document.querySelector('#username')
var elInputPassword = document.querySelector('#password')
var elInputPassword2 = document.querySelector('#password-retype')

var elFailureMessage = document.querySelector('.failure-message')
var elSuccessMessage = document.querySelector('.success-message')
var elMismatchMessage = document.querySelector('.mismatch-message')
var elNumenMessage = document.querySelector('.numen-message')
var elStrpasswordMessage = document.querySelector('.strpassword-message')


elInputUsername.onkeyup = function () {
    if (isMoreThan4Length(elInputUsername.value)) {
        elSuccessMessage.classList.remove('hide')//성공메시지 표시
        elFailureMessage.classList.add('hide')//실패메세지 가려짐
    }
    else {
        elSuccessMessage.classList.add('hide')
        elFailureMessage.classList.remove('hide')
    }
    if (onlyNumberAndEnglish(elInputUsername.value)) {
        elNumenMessage.classList.add('hide')
    }
    else {
        elNumenMessage.classList.remove('hide')
    }
}


elInputPassword.onkeyup = function () {
    if (strongPassword(elInputPassword.value)) {
        elStrpasswordMessage.classList.add('hide')
    }
    else {
        elStrpasswordMessage.classList.remove('hide')
    }
}


elInputPassword2.onkeyup = function () {
    if (isMatch(elInputPassword.value, elInputPassword2.value)) {
        elMismatchMessage.classList.add('hide')//비밀번호일치
    }
    else {
        elMismatchMessage.classList.remove('hide')//비밀번호불일치
    }
}
function isMoreThan4Length(value) {
    return value.length >= 4
}

function isMatch(pwd, pwd2) {
    if (pwd === pwd2) {
        return true;
    }
    else {
        return false
    }
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
    return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}
// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}
var modal = document.getElementById('myModal');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}