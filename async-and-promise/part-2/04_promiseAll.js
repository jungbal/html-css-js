const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
 const user1 = getDataFromFilePromise(user1Path);
 const user2 = getDataFromFilePromise(user2Path);
  return Promise.all([user1, user2]).then((value) => {
    return value.map((el) => JSON.parse(el));
  })
}

readAllUsers()

module.exports = {
  readAllUsers
}