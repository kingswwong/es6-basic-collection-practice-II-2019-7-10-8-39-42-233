'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let temp = collectionA.reduce((re, cur) => {
    re[cur] ? re[cur]++ : re[cur] = 1
    return re;
  },{})
  let keys = Object.keys(temp);
  let c = [];
  keys.forEach(key => {
    c.push({key: key, count: temp[key]})
  })
  c.forEach(item => {
    if(objectB.value.indexOf(item.key) !== -1){
      item.count -= parseInt(item.count / 3);
    }
  })
  return c;
}
