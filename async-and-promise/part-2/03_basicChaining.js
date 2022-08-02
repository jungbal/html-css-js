const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  return getDataFromFilePromise(user1Path)
  .then((value) => JSON.parse(value))
  .then(user1 => {
    return getDataFromFilePromise(user2Path)
    .then((value) => JSON.parse(value))
    .then(user2 => {
      return [user1, user2]
    })
  })
}

 readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}