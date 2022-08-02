
async function getNewsAndWeatherAsync() {
  const json1 = await fetch(newsURL).then((value) => value.json());
  const json2 = await fetch(weatherURL).then((value) => value.json());
  return {news: json1.data, weather: json2} //return 컨텐츠
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}