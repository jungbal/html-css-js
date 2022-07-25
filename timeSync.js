function waitSync(ms) {
    var start = Date.now();
    var now = start;
    while(now - start < ms) {
        now = Date.now();
    }
}
function drink(person, coffee) {
    console.log(person + '는 ' + coffee + '를 마십니다');
}
function orderCoffeeSync(coffee) {
    console.log(coffee + '가 접수되었습니다');
    waitSync(4000);
    return coffee;
}
let customers = [{
    name: 'Steve',
    request: '카페라떼'
}, {
    name: 'John',
    request: '아메리카노'
}];
customers.forEach(function(customer) {
    let coffee = orderCoffeeSync(customer.request);
    drink(customer.name, coffee);
});