'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let temp = collectionA.reduce((re, cur) => {
    let letter = cur.split("-")[0];
    let count = cur.split("-")[1] === undefined ? 1 : cur.split("-")[1]
    re[letter] ? re[letter] += parseInt(count) : re[letter] = parseInt(count);
    return re;
  },{})
  let keys = Object.keys(temp);
  let c = [];
  keys.forEach(key => {
    c.push({key: key, count: temp[key]})
  })
  c.forEach(item => {
    if(objectB.value.indexOf(item.key) !== -1){
      item.count -= parseInt(item.count / 3)
    }
  })
  return c;
}
