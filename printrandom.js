const printString = (string) => {
    setTimeout(
        () => {
            console.log(string)
        },
        Math.floor(Math.random() * 100) + 1
    )
}
const printAll = () => {
    printString("A")
    printString("B")
    printString("C")
}
printAll();