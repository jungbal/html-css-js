function stringifyJSON(obj) {
  // 들어오는 obj가 숫자, bool, null 인 경우
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null ) {
    // toString() 은 null을 문자열로 변환시키지 못한다.
    return '' + obj;
  }
  // obj가 객체인 경우
  if(typeof obj === 'string') {
    return `"${obj}"`
  }
  // obj가 배열인 경우
  if(Array.isArray(obj)){
    let arr = []; 
    for(let list of obj){
      arr.push(stringifyJSON(list)) 
    }  
    return `[${arr}]`
  }

  if( typeof obj === 'undefined' ){
    return undefined;
  }
  
  // obj가 객체인 경우
  // 여기서 재귀를 발생시킨다.
  if(typeof obj === 'object' || typeof obj === 'function' ) {
    let str = '';
    for(let key in obj) {
      // 해당 value 값이 함수이거나 존재하지 않는다면
      if(typeof obj[key] === 'function' || undefined) {
         return "{}";
       }
      
      let newKey = stringifyJSON(key)
      let value = stringifyJSON(obj[key])
      str = str + newKey + ":" + value + ',';
      }
      // 맨 마지막 요소를 자른 새로운 배열을 만든다.
      // 맨 마지막에 , 를 잘라줘야 하기 때문 
      str = str.slice(0, -1);
      return `{${str}}`;
  }
  
};
if (typeof window === "undefined") {
  module.exports = stringifyJSON;
}