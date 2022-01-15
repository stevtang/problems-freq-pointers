"use strict";

/**TODO ADD DOCSTRING */

// add whatever parameters you deem necessary
function averagePair(arrOfInts, average) {

    //variable for the first index
    //variable for the last index

    let smallIndex = 0;
    let bigIndex = arrOfInts.length - 1;

    while ( smallIndex < bigIndex ){

        let tempAverage = (arrOfInts[smallIndex] + arrOfInts[bigIndex]) / 2;

        if (tempAverage === average ){
            return true;
        } else if (tempAverage > average){

            bigIndex -= 1;

        } else {

            smallIndex += 1;

        }

    }
 
    return false;

}



//inputs sorted array of integers, target average
//