'use strict';

const removeFromArray = function(inputArray, ...toRemoveItems) {

    // split toRemoveItems into two separate arrays:
    // 1 will contain all numbers and
    // 2 will contain all strings

    let toRemoveItemsNumbers = [];
    let toRemoveItemsStrings = [];

    for (const toRemoveItem of toRemoveItems) {
        if (typeof(toRemoveItem) == 'number') toRemoveItemsNumbers.push(toRemoveItem);
        if (typeof(toRemoveItem) == 'string') toRemoveItemsStrings.push(toRemoveItem);
    }

    // sort the array with numbers descending
    toRemoveItemsNumbers = toRemoveItemsNumbers.sort();
    toRemoveItemsNumbers = toRemoveItemsNumbers.reverse();

    // first remove all numbered items
    for (const toRemoveItem of toRemoveItemsNumbers) {
        inputArray.splice(toRemoveItem - 1, 1);
    }
    
    // now remove all strings
    let startPosition = 0;
    for (const toRemoveItem of toRemoveItemsStrings) {
        while (inputArray.includes(toRemoveItem)) {
            startPosition = inputArray.indexOf(toRemoveItem);
            inputArray.splice(startPosition, 1);
        }
    }

    // return remaining array
    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
