const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async() => {
  const user1 = await getDataFromFilePromise(user1Path);//await로 경로 반환
  const user2 = await getDataFromFilePromise(user2Path);//
  return [JSON.parse(user1), JSON.parse(user2)];//변환결과 인수 전달 반환
}

//readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}