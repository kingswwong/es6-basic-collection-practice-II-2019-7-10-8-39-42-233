'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

    let ojectBValues = objectB.value
    collectionA.forEach(cA => {
        if (ojectBValues.includes(cA.key)) {
            cA.count = cA.count - parseInt(cA.count / 3)
        }
    })
    return collectionA;
}
