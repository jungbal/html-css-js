function getNewsAndWeatherAll() {
  return Promise.all([
    fetch(newsURL),
    fetch(weatherURL)
  ])
    .then(([newsResponse, weatherResponse]) => {
      return Promise.all([newsResponse.json(), weatherResponse.json()])
    })
    .then(([news, weather]) => {
      return {
        news: news.data,
        weather: weather
      }
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}