const con = require('../db');
const db = require('../db');

module.exports = {
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const queryString = `SELECT * FROM items`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
  orders: {
    get: (userId, callback) => {
      const queryString = `select orders.id, name, image, price, total_price, order_quantity, created_at
      from orders
      join users
      on users.id = orders.user_id
      join order_items
      on orders.id = order_items.order_id
      join items
      on items.id = order_items.item_id
      where users.id = ${userId}`;
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    post: (userId, orders, totalPrice, callback) => {
      const queryString = `insert into orders(user_id, total_price) values(${userId}, ${totalPrice})`;
      db.query(queryString, (error, result) => {
        if(error){
          callback(error, null)
        }else{
          const queryString =  `insert into order_items(order_id, item_id, order_quantity) values ?`
          const params = orders.map((el) => {
            return[
              result.insertId,
              el.itemId,
              el.quantity
            ]
          })
          console.log('test2', params)
          return db.query(queryString, [params], (error, result) => {
            callback(error, result)
          })
        }
      })
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
    }
  },
};
