const models = require('../models');

module.exports = {
  items: {
    get: (req, res) => {
      models.items.get((error, result) => {
        if (error) {
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).json(result);
        }
      });
    },
  },
  orders: {
    get: (req, res) => {
      const userId = req.params.userId;
      if(!userId){
        return res.status(401).send('XXX')
      }
      models.orders.get(userId, (error, result) => {
        if(error){
          res.status(500).send('error');
        }else{
          res.status(200).json(result);
        }
      })
      // TODO: 요청에 따른 적절한 응답을 돌려주는 컨트롤러를 작성하세요.
    },
    post: (req, res) => {
      const userId = req.params.userId;
      const { orders, totalPrice } = req.body;
      if(!userId || !orders || !totalPrice){
        res.status(400).send('error');
      }else{
      models.orders.post(userId, orders, totalPrice, (error, result) => {
        if(error){
          res.status(400).send('error');
        }else{
          res.status(201).json('ok');
        }
      })
    }
      // TODO: 요청에 따른 적절한 응답을 돌려주는 컨트롤러를 작성하세요.
    },
  },
};
