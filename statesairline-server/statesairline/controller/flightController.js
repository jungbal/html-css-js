const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const {query} = req
    const {departure_times, arrival_times, destination, departure} = query
    if(query){
    if(departure_times && arrival_times){
    let filtered = flights.filter(function(el){
    return el.departure_times === departure_times && el.arrival_times === arrival_times
    })
    return res.json(filtered);
  }
    if(destination && departure){
    let filtered = flights.filter(function(el){
    return el.destination === destination && el.departure === departure
    })
    return res.json(filtered);
  }
}

    return res.json(flights);
  },
  // [GET] /flight/:id
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    if(req.params.id){
    let filtered = flights.filter(function(el){
    return el.uuid === req.params.id
    })
    return res.json(filtered);
  }

  },

  // [PUT] /flight/:id 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    let data;
    if(req.params.id){
    data = flights.filter(function(el){
    return el.uuid === req.params.id
    })
 let filtered = Object.assign(data[0], req.body)
 return res.status(200).json(filtered)
 }
    

    return res.status(200).json(data);
  }
};