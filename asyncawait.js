function gotoCodestates() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => { resolve('1. go to codestates')}, 500)
    })
}
function sitAndCode(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('2. sit and code')}, 400)
    })
}
function eatLunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('3. eat lunch')}, 300)
    })
}
function goToBed(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('4. goToBed')}, 200)
    })
}
const result = async () => {
    const one = await gotoCodestates();
    console.log(one)

    const two = await sitAndCode();
    console.log(two)

    const three = await eatLunch();
    console.log(three)

    const four = await goToBed();
    console.log(four)
}
result();