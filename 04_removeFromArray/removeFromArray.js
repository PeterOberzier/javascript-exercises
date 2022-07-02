'use strict';

const removeFromArray = function(inputArray, ...toRemoveItems) {

    // split toRemoveItems into two separate arrays:
    // 1 will contain all numbers and will be sorted 
    // 2 will contain all strings

    let toRemoveItemsNumbers = [];
    let toRemoveItemsStrings = [];
    let dummy = 0;

    for (let i = 0; i < toRemoveItems.length; i++) {
        typeof(toRemoveItems[i]) == 'number' ? toRemoveItemsNumbers.push(toRemoveItems[i]) : dummy = 0;
        typeof(toRemoveItems[i]) == 'string' ? toRemoveItemsStrings.push(toRemoveItems[i]) : dummy = 0;
    }

    toRemoveItemsNumbers = toRemoveItemsNumbers.sort();
    toRemoveItemsNumbers = toRemoveItemsNumbers.reverse();

    // first remove all numbered items
    for (let i = 0; i < toRemoveItemsNumbers.length; i++) {
        inputArray.splice(toRemoveItemsNumbers[i] - 1, 1);
    }
    
    // now remove all strings
    let toRemoveItem = '';
    let startPosition = 0;
    for (let i = 0; i < toRemoveItemsStrings.length; i++) {
        toRemoveItem = toRemoveItemsStrings[i];
        while (inputArray.includes(toRemoveItem)) {
            startPosition = inputArray.indexOf(toRemoveItem);
            inputArray.splice(startPosition, 1);
        }
    }

    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
