"use strict";

/** Finds if array has two values that equal target average. Inputs: Array of integers, Number for average. Output: True/False.  */

function averagePair(arrOfInts, average) {

    //left most index
    let smallIndex = 0;
    //right most index
    let bigIndex = arrOfInts.length - 1;
    //while loop until indices meet
    while (smallIndex < bigIndex) {

        let tempAverage = (arrOfInts[smallIndex] + arrOfInts[bigIndex]) / 2;

        if (tempAverage === average) {
            return true;
        } else if (tempAverage > average) {
            bigIndex -= 1;
        } else {
            smallIndex += 1;
        }
    }
    return false;
}
