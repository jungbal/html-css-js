const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
   return fetch(newsURL)//fetch 리소스 인수지정(뉴스)
   .then((response) => response.json())
   .then((json1) => {
    return fetch(weatherURL)
    .then((response) => response.json())
    .then((json2) => {
      return {
        news : json1.data,
        weather :  json2
      }
    })
   })
    
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}