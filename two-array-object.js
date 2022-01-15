"use strict";

/** Creating object from two arrays as keys and values. Inputs:Array of keys, Array of values. Output: Object */

function twoArrayObject(arrOfKeys, arrOfValues) {

    const outputObject = {};

    for (let i = 0; i < arrOfKeys.length; i++) {
        if (arrOfValues[i] === undefined) {
            outputObject[arrOfKeys[i]] = null;
        } else {
            outputObject[arrOfKeys[i]] = arrOfValues[i];
        }
    }
    return outputObject;
}
